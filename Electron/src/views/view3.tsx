import { Button } from "@/components/button";
import { Controller, useForm } from "react-hook-form";
import { Likert } from "@/components/likert";
import { Modal } from "@/components/modal";
import { useEffect } from "react";
import { useModal } from "@/hooks/use-modal";
import { useStore } from "@/hooks/use-store";
import WebIcon from "@/components/icons/web";

const NavigationForm = ({
  onSubmit,
}: {
  onSubmit: ({ rated }: { rated: string }) => void;
}) => {
  const form = useForm<{ rated?: string }>({
    defaultValues: {
      rated: undefined,
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
  const form = useForm<{ rated?: string }>({
    defaultValues: {
      rated: undefined,
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
    resources,
    navigation,
    currentUrl,
    addResource,
    ratedNavigation,
    setTaskTimeEnd,
    setCurrentUrl,
    setComplex,
    nextView,
  } = useStore();

  const {
    isOpen: isModalNavigationOpen,
    openModal: openModalNavgation,
    closeModal: closeModalNavigation,
  } = useModal();

  const {
    isOpen: isModalComplex,
    openModal: openModalComplex,
    closeModal: closeModalComplex,
  } = useModal();

  useEffect(() => {
    window.ipcRenderer.on("url:change", async (_, prevUrl: string, url: string) => {
      console.log({ prevUrl, url });

      setCurrentUrl(url);

      if (url.startsWith("https://www.google.com")) return;
      if (prevUrl.startsWith("https://www.google.com")) return;

      const { navigation, addNavigation } = useStore.getState();

      if (navigation.find((n) => n.url === url)) return;

      await window.ipcRenderer.invoke("modal", true);

      addNavigation(url);
      openModalNavgation();
    });

    return () => {
      window.ipcRenderer.removeAllListeners("url:change");
    };
  }, []);

  const alreadyNavigation = navigation.find((n) => {
    return n.url === currentUrl && n.isRated === true;
  });

  const isDisabled = Boolean(resources.find((r) => r.url === currentUrl)) || !currentUrl;

  return (
    <>
      <div className="p-4 flex flex-col gap-4">
        <div className="font-bold text-2xl">SFE3000</div>
        <div>Tarea 1/1</div>
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
            {currentUrl ?? "Se autocompletará cuando navegues por la web"}
          </div>
        </div>
        {alreadyNavigation && (
          <Likert
            variant={"horizontal"}
            values={["1", "2", "3", "4", "5"]}
            labels={["no lo es", "neutral", "es exactamente"]}
            label={"¿Es lo que buscaba?"}
            value={alreadyNavigation.rated}
            onChange={(rated) => {
              ratedNavigation(alreadyNavigation.url, rated);
            }}
          />
        )}
        <Button
          variant="soft"
          color="yellow"
          disabled={isDisabled}
          onClick={() => addResource(currentUrl!)}
        >
          Seleccionar recurso
        </Button>
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
            await window.ipcRenderer.invoke("modal", true);

            setTaskTimeEnd();
            openModalComplex();
          }}
        >
          Finalizar tarea 1
        </Button>
      </div>
      {isModalNavigationOpen && (
        <Modal>
          <NavigationForm
            onSubmit={async ({ rated }) => {
              ratedNavigation(currentUrl!, rated);
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
              setComplex(rated);
              closeModalComplex();
              nextView();

              await window.ipcRenderer.invoke("modal", false);
            }}
          />
        </Modal>
      )}
    </>
  );
};
