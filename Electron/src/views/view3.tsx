import { Button } from "@/components/button";
import { Controller, useForm } from "react-hook-form";
import { Likert } from "@/components/likert";
import { Modal } from "@/components/modal";
import { useEffect, useState } from "react";
import { useModal } from "@/hooks/use-modal";
import { useStore } from "@/hooks/use-store";
import WebIcon from "@/components/icons/web";
import clsx from "clsx";

const NavigationForm = ({
  onSubmit,
  variant,
  rated,
}: {
  onSubmit: ({ rated }: { rated: string }) => void;
  variant: "vertical" | "horizontal";
  rated?: string;
}) => {
  const form = useForm<{ rated?: string }>({
    values: {
      rated,
    },
  });

  return (
    <form
      className={clsx(
        variant === "vertical"
          ? "p-8 flex flex-col gap-4"
          : variant === "horizontal"
          ? "flex flex-col gap-4"
          : ""
      )}
      onSubmit={form.handleSubmit(({ rated }) => {
        onSubmit({ rated: rated! });
      })}
    >
      {variant === "vertical" && (
        <div>
          <div className="text-lg font-bold">
            Clasificación del resultado anterior
          </div>
          <div>Clasifique en base a la siguiente escala</div>
        </div>
      )}
      <Controller
        control={form.control}
        rules={{ required: true }}
        name="rated"
        render={({ field: { value, onChange } }) => {
          return (
            <Likert
              value={value}
              onChange={onChange}
              variant={variant}
              values={["1", "2", "3", "4", "5"]}
              labels={
                variant === "vertical"
                  ? [
                      "El enlace estaba roto o no tenía nada que ver con los términos de búsqueda.",
                      "Los términos de búsqueda se incluyeron en la página, pero no eran relevantes para la búsqueda.",
                      "Era relevante para la búsqueda, pero no era tan interesante en relación con lo que buscaba.",
                      "Es interesante y, en general, parece coincidir con los términos de búsqueda.",
                      "Es exactamente lo que buscaba.",
                    ]
                  : variant === "horizontal"
                  ? ["no lo es", "neutral", "es exactamente"]
                  : []
              }
              label={
                variant === "vertical"
                  ? "¿Qué tan confiado se encuentra en que encontrará un datataset?"
                  : variant === "horizontal"
                  ? "¿Es lo que buscaba?"
                  : ""
              }
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
    <Modal>
      <form
        className="p-8 flex flex-col gap-4"
        onSubmit={form.handleSubmit(({ rated }) => {
          onSubmit({ rated: rated! });
        })}
      >
        <div>
          <div className="text-lg font-bold">
            Clasificación complejidad tarea 1
          </div>
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
    </Modal>
  );
};

export const View3 = () => {
  const [url, setUrl] = useState<string>();

  const {
    resources,
    navigation,
    addResource,
    addNavigation,
    ratedNavigation,
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

  // useEffect(() => {
  //   async function handler(_: any, path: string) {
  //     if (path.startsWith("https://www.google.com")) return;
  //     const { navigation, addNavigation } = useStore.getState();
  //     const current = navigation.find((value) => value.url === path);
  //     if (!current) addNavigation(path);
  //     if (navigation.length === 0) return;
  //     const previous = navigation.at(-2)!;
  //     if (previous.isRated) return;
  //     previousR.current = previous.url;
  //     await window.ipcRenderer.invoke("modal", true);
  //     openModalNavgation();
  //   }

  //   window.ipcRenderer.on("browser:path:change", handler);

  //   return () => {
  //     window.ipcRenderer.off("browser:path:change", handler);
  //   };
  // }, []);

  useEffect(() => {
    const channel1 = "modal:navigation:open";
    const channel2 = "url:change";

    function func1(_: Electron.IpcRendererEvent, url: string) {
      if (navigation.find(n => n.url === url)) return;
      openModalNavgation(url);
      addNavigation(url);
    }

    function func2(_: Electron.IpcRendererEvent, url: string) {
      setUrl(url);
    }

    window.ipcRenderer.on(channel1, func1);
    window.ipcRenderer.on(channel2, func2);

    return () => {
      window.ipcRenderer.off(channel1, func1);
      window.ipcRenderer.off(channel2, func2);
    };
  }, []);

  const alreadyNavigation = navigation.find(
    (n) => n.url === url && n.isRated === true
  );

  return (
    <>
      <div className="p-4 flex flex-col gap-4">
        <div className="font-bold text-2xl">SFE3000</div>
        <div>Tarea 1/1</div>
        <p>
          Imagina que trabajas en un proyecto de clase sobre inteligencia
          artificial aplicado a la salud. Tu tarea es encontrar un dataset
          confiable que contenga información sobre enfermedades o condiciones de
          salud.
        </p>
        <div>
          <label className="block text-sm font-medium mb-2 dark:text-white">
            Recurso actual
          </label>
          <div className="break-all text-sm py-2.5 px-4 border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
            {url ?? "Se autocompletará cuando navegues por la web"}
          </div>
        </div>
        {alreadyNavigation && (
          <NavigationForm
            rated={alreadyNavigation.rated}
            variant="horizontal"
            onSubmit={({ rated }) =>
              ratedNavigation(alreadyNavigation.url, rated)
            }
          />
        )}
        <Button
          variant="soft"
          color="yellow"
          disabled={resources.includes(url!) || !url}
          onClick={() => addResource(url!)}
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
                    <span className="font-normal break-all">{rsc}</span>
                  </div>
                ))}
          </div>
        </div>
        <Button
          variant="solid"
          color="blue"
          onClick={async () => {
            openModalComplex();

            window.ipcRenderer.send("modal:state", true);
          }}
        >
          Finalizar tarea 1
        </Button>
      </div>
      {isModalNavigationOpen.isOpen && (
        <Modal>
          <NavigationForm
            variant="vertical"
            onSubmit={async ({ rated }) => {
              closeModalNavigation();
              ratedNavigation(isModalNavigationOpen.url!, rated);

              window.ipcRenderer.send("modal:navigation:close");
            }}
          />
        </Modal>
      )}
      {isModalComplex.isOpen && (
        <ComplexModal
          onSubmit={async ({ rated }) => {
            closeModalComplex();
            setComplex(rated);
            nextView();

            window.ipcRenderer.send("modal:state", false);
          }}
        />
      )}
    </>
  );
};
