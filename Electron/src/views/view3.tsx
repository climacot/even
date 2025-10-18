import { Button } from "@/components/button";
import { Controller, useForm } from "react-hook-form";
import { Likert } from "@/components/likert";
import { Modal } from "@/components/modal";
import { useEffect } from "react";
import { useModal } from "@/hooks/use-modal";
import { useStore } from "@/hooks/use-store";
import WebIcon from "@/components/icons/web";
import toast from "react-hot-toast";

const NavigationForm = ({
  onSubmit,
}: {
  onSubmit: ({ rated }: { rated: string }) => void;
}) => {
  const form = useForm({
    defaultValues: {
      rated: "",
    },
  });

  return (
    <form
      className="p-8 flex flex-col gap-4"
      onSubmit={form.handleSubmit(({ rated }) => {
        onSubmit({ rated: rated! });
      })}
    >
      <div>
        <div className="text-lg font-bold">Clasificación del resultado anterior</div>
        <div>Clasifique en base a la siguiente escala</div>
      </div>
      <Controller
        control={form.control}
        rules={{ required: true }}
        name="rated"
        render={({ field: { value, onChange } }) => {
          return (
            <Likert
              value={value}
              onChange={onChange}
              variant="vertical"
              values={["1", "2", "3", "4", "5"]}
              label="¿Qué tan confiado se encuentra en que encontrará un datataset?"
              labels={[
                "El enlace estaba roto o no tenía nada que ver con los términos de búsqueda.",
                "Los términos de búsqueda se incluyeron en la página, pero no eran relevantes para la búsqueda.",
                "Era relevante para la búsqueda, pero no era tan interesante en relación con lo que buscaba.",
                "Es interesante y, en general, parece coincidir con los términos de búsqueda.",
                "Es exactamente lo que buscaba.",
              ]}
            />
          );
        }}
      />
      <Button
        disabled={!form.formState.isValid}
        variant="solid"
        color="blue"
        type="submit"
      >
        Enviar clasificación
      </Button>
    </form>
  );
};

const ComplexModal = ({
  onSubmit,
}: {
  onSubmit: ({ rated }: { rated: string }) => void;
}) => {
  const form = useForm({
    defaultValues: {
      rated: "",
    },
  });

  return (
    <form
      className="p-8 flex flex-col gap-4"
      onSubmit={form.handleSubmit(({ rated }) => {
        onSubmit({ rated: rated! });
      })}
    >
      <div>
        <div className="text-lg font-bold">Clasificación complejidad tarea 1</div>
        <div>Clasifique en base a la siguiente escala</div>
      </div>
      <Controller
        control={form.control}
        name="rated"
        rules={{ required: true }}
        render={({ field: { onChange } }) => {
          return (
            <Likert
              label="¿Qué tan confiado se encuentra en que encontrará un datataset?"
              onChange={(value) => onChange(value)}
              variant="horizontal"
              values={["1", "2", "3", "4", "5"]}
              labels={["fácil", "neutral", "compleja"]}
            />
          );
        }}
      />
      <Button
        disabled={!form.formState.isValid}
        variant="solid"
        color="blue"
        type="submit"
      >
        Enviar clasificación
      </Button>
    </form>
  );
};

export const View3 = () => {
  const {
    prevUrl,
    currentUrl,
    navigations,
    ratedNavigation,
    setTaskTimeEnd,
    setCurrentUrl,
    setComplex,
    setPrevUrl,
    nextView,
  } = useStore();

  const {
    isOpen: isModalNavigationOpen,
    openModal: openModalNavgation,
    closeModal: closeModalNavigation,
  } = useModal();

  const {
    isOpen: isModalNavigationOpenEnd,
    openModal: openModalNavgationEnd,
    closeModal: closeModalNavigationEnd,
  } = useModal();

  const {
    isOpen: isModalComplex,
    openModal: openModalComplex,
    closeModal: closeModalComplex,
  } = useModal();

  useEffect(() => {
    window.ipcRenderer.on("url:change", async (_, prevUrl: string, url: string) => {
      setCurrentUrl(url);
      setPrevUrl(prevUrl);

      if (url.startsWith("https://www.google.com")) return;

      const { navigations, addNavigation } = useStore.getState();

      if (navigations.find((n) => n.url === url)) return;

      addNavigation(url);

      if (prevUrl.startsWith("https://www.google.com")) return;

      await window.ipcRenderer.invoke("modal", true);

      openModalNavgation();
    });

    return () => {
      window.ipcRenderer.removeAllListeners("url:change");
    };
  }, []);

  const navigated = navigations.find((n) => {
    return n.url === currentUrl && Boolean(n.rated) === true;
  });

  const resources = navigations.filter((n) => {
    return n.rated === 5;
  });

  return (
    <>
      <div className="p-4 flex flex-col gap-4">
        <div className="font-bold text-2xl">SFE3000</div>
        <div>Tarea</div>
        <p>
          Imagina que trabajas en un proyecto de clase sobre inteligencia artificial
          aplicado a la salud. Tu tarea es encontrar un dataset confiable que contenga
          información sobre enfermedades o condiciones de salud.
        </p>
        <div>
          <label className="block text-sm font-medium mb-2 dark:text-white">
            Recurso actual
          </label>
          <div className="break-all text-sm py-2.5 px-4 border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
            {currentUrl ?? "Se autocompletará cuando navegues por la web."}
          </div>
        </div>
        {navigated && (
          <Likert
            variant={"horizontal"}
            values={["1", "2", "3", "4", "5"]}
            labels={["no lo es", "neutral", "es exactamente"]}
            label={"¿Es lo que buscaba?"}
            value={navigated.rated?.toString()}
            onChange={(rated) => ratedNavigation(navigated.url, Number(rated))}
          />
        )}
        <div>
          <label className="block text-sm font-medium mb-2 dark:text-white">
            Recursos seleccionados
          </label>
          <div className="py-2.5 px-4 text-sm flex flex-col gap-2 border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
            {resources.length === 0
              ? "Aún no se ha seleccionado ningún recurso."
              : resources.map((rsc, index) => (
                  <div key={index} className="flex gap-4">
                    <div>
                      <WebIcon />
                    </div>
                    <span className="font-normal break-all">{rsc.url}</span>
                  </div>
                ))}
          </div>
        </div>
        <Button
          variant="solid"
          color="blue"
          onClick={async () => {
            const currentNavigation = navigations.find((n) => n.url === currentUrl);

            await window.ipcRenderer.invoke("modal", true);

            if (currentNavigation && Boolean(currentNavigation?.rated) === false) {
              return openModalNavgationEnd();
            }

            setTaskTimeEnd();
            openModalComplex();
          }}
        >
          Finalizar tarea
        </Button>
      </div>
      {isModalNavigationOpenEnd && (
        <Modal>
          <NavigationForm
            onSubmit={async ({ rated }) => {
              ratedNavigation(currentUrl!, Number(rated));
              closeModalNavigationEnd();
              setTaskTimeEnd();
              openModalComplex();
            }}
          />
        </Modal>
      )}
      {isModalNavigationOpen && (
        <Modal>
          <NavigationForm
            onSubmit={async ({ rated }) => {
              ratedNavigation(prevUrl!, Number(rated));
              closeModalNavigation();

              await window.ipcRenderer.invoke("modal", false);
            }}
          />
        </Modal>
      )}
      {isModalComplex && (
        <Modal>
          <ComplexModal
            onSubmit={async ({ rated }) => {
              setComplex(Number(rated));
              closeModalComplex();

              toast.success("Tarea finalizada.");

              nextView();

              await window.ipcRenderer.invoke("modal", false);
            }}
          />
        </Modal>
      )}
    </>
  );
};
