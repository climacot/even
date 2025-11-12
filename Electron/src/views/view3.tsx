import { Button } from "@/components/buttons/button";
import { ComplexForm } from "@/components/forms/complex-form";
import { createSession } from "@/services/database";
import { driver } from "driver.js";
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
    setModalIsOpen,
    ratedNavigation,
    setTaskTimeStart,
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

  useEffect(() => {
    const driverjs = driver({
      allowClose: false,
      disableActiveInteraction: true,
      nextBtnText: "Continuar",
      prevBtnText: "Atrás",
      doneBtnText: "Entendido",
      popoverClass: 'driverjs-theme',
      onDestroyed: async () => {
        setTaskTimeStart();
        await electron.closeModal();
        setModalIsOpen(false);
      },
      steps: [
        {
          element: "#task",
          popover: {
            title: "Tarea",
            description: "Según esta tarea, va a navegar por la web.",
          },
        },
        {
          element: "#web",
          popover: {
            title: "Navegador web",
            description:
              "Luego deberá navegar por internet buscando recursos web.",
          },
        },
        {
          element: "#calificate",
          popover: {
            title: "Calificar tarea",
            description:
              "Luego de encontrar un recurso web, presiona este botón para calificarlo. Puede calificar los recursos que desee.",
          },
        },
        {
          element: "#list",
          popover: {
            title: "Lista de tareas calificadas",
            description:
              "Luego de calificar un recurso web lo encontrará en esta lista.",
          },
        },
        {
          element: "#end",
          popover: {
            title: "Finalizar tarea",
            description:
              "Por último, presiona este botón para finalizar la tarea.",
          },
        },
      ],
    });

    driverjs.drive();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Layout>
        <Layout.Header>
          <div id="task">
            <Task description={task?.description} />
          </div>
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
                placeholder="Se autocompletará cuando navegue."
                value={currentUrl}
                onChange={() => {}}
              />
              <div id="calificate">
                <Button color="yellow" onClick={onCalificateResource}>
                  Calificar recurso
                </Button>
              </div>
            </div>
            <Navigations
              navigations={resources}
              onPressed={(url) => electron.goUrlFull(url)}
            />
          </div>
        </Layout.Body>
        <Layout.Footer>
          <div id="end">
            <Button onClick={onEndTask}>Finalizar tarea</Button>
          </div>
        </Layout.Footer>
      </Layout>
      {isRatedModalOpen && (
        <LayoutModal>
          <NavigationForm
            onClose={async () => {
              closeRatedModal();
              await electron.closeModal();
            }}
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
            onClose={async () => {
              closeComplexModal();
              await electron.closeModal();
            }}
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
