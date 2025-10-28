import { Button } from "@/components/buttons/button";
import { ComplexForm } from "@/components/forms/complex-form";
import { createSession } from "@/services/database";
import { electron } from "@/services/electron";
import { Input } from "@/components/inputs/input";
import { Layout } from "@/components/layouts/layout";
import { LayoutModal } from "@/components/layouts/layout-modal";
import { NavigationForm } from "@/components/forms/navigation-form";
import { Navigations } from "@/components/navigations";
import { Task } from "@/components/layouts/task";
import { useEffect, useState } from "react";
import { useModal } from "@/hooks/use-modal";
import { useStore } from "@/hooks/use-store";
import { useTask } from "@/hooks/use-task";
import toast from "react-hot-toast";

export const View3 = () => {
  const {
    currentUrl,
    navigations,
    addNavigation,
    ratedNavigation,
    setTaskTimeEnd,
    setCurrentUrl,
    setComplex,
    nextView,
  } = useStore();

  const {
    isOpen: isRatedModalOpen,
    openModal: openRatedModal,
    closeModal: closeRatedModal,
  } = useModal();

  const {
    isOpen: isComplexModalOpen,
    openModal: openComplexModal,
    closeModal: closeComplexModal,
  } = useModal();

  const { task } = useTask();

  useEffect(() => {
    electron.onUrlChange(({ url }) => {
      setCurrentUrl(url);
      const { navigations } = useStore.getState();
      if (navigations.find((n) => n.url === url)) return;
      addNavigation(url);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resources = navigations.filter((n) => {
    return Boolean(n.rated);
  });

  const onCalificateResource = async () => {
    if (!currentUrl) {
      return toast.error("Primero debes navegar por la web");
    }

    await electron.openModal();

    openRatedModal();
  };

  const onEndTask = async () => {
    await electron.openModal();

    setTaskTimeEnd();
    openComplexModal();
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Layout>
        <Layout.Header>
          <Task description={task?.description} />
        </Layout.Header>
        <Layout.Body>
          <div
            className="h-full overflow-hidden"
            style={{ display: "grid", gridTemplateRows: "auto 1fr" }}
          >
            <div className="flex flex-col gap-4 mb-6">
              <Input
                disabled
                label="Recurso actual"
                placeholder="Se autocompletará cuando navegues."
                value={currentUrl}
                onChange={() => {}}
              />
              <Button color="yellow" onClick={onCalificateResource}>
                Calificar recurso
              </Button>
            </div>
            <Navigations navigations={resources} />
          </div>
        </Layout.Body>
        <Layout.Footer>
          <Button onClick={onEndTask}>Finalizar tarea</Button>
        </Layout.Footer>
      </Layout>
      {isRatedModalOpen && (
        <LayoutModal>
          <NavigationForm
            onClose={closeRatedModal}
            onSubmit={async ({ rated }) => {
              ratedNavigation(currentUrl!, Number(rated));
              closeRatedModal();

              await electron.closeModal();
            }}
          />
        </LayoutModal>
      )}
      {isComplexModalOpen && (
        <LayoutModal>
          <ComplexForm
            isLoading={isLoading}
            onClose={closeComplexModal}
            onSubmit={async ({ rated }) => {
              try {
                setIsLoading(true);
                setComplex(Number(rated));

                const store = useStore.getState();

                await createSession({
                  taskId: store.taskId!,
                  complex: store.complex!,
                  feeling: store.feeling!,
                  fullName: store.fullName!,
                  sessionId: store.sessionId!,
                  taskTimeEnd: store.taskTimeEnd!,
                  taskTimeStart: store.taskTimeStart!,
                  navigations: store.navigations.map((n) => ({
                    ...n,
                    rated: n.rated!,
                    ratedAt: n.ratedAt!,
                  })),
                });

                toast.success("Tarea finalizada.");

                nextView();
                closeComplexModal();

                await electron.hideBrowser();
                await electron.closeModal();
              } catch (error) {
                console.error(error);
                if (error instanceof Error) {
                  toast.error(error.message);
                }
              } finally {
                setIsLoading(false);
              }
            }}
          />
        </LayoutModal>
      )}
    </>
  );
};
