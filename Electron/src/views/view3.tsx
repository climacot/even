import { Button } from "@/components/button";
import { Controller, useForm } from "react-hook-form";
import { Likert } from "@/components/likert";
import { Modal } from "@/components/modal";
import { useEffect } from "react";
import { useModal } from "@/hooks/use-modal";
import { useStore } from "@/hooks/use-store";
import WebIcon from "@/components/icons/web";

const NavigationModal = ({
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
            Clasificación del resultado anterior
          </div>
          <div>Clasifique en base a la siguiente escala</div>
        </div>
        <Controller
          control={form.control}
          rules={{ required: true }}
          name="rated"
          render={({ field: { onChange } }) => {
            return (
              <Likert
                label="¿Qué tan confiado se encuentra en que encontrará un datataset?"
                onChange={(value) => onChange(value)}
                variant="vertical"
                values={["1", "2", "3", "4", "5"]}
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
    </Modal>
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
  const { resources, addResource, ratedNavigation, setComplex, nextView } =
    useStore();

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
    async function func() {
      await window.ipcRenderer.invoke("modal", true);
      openModalNavgation();
    }

    func();
  }, []);

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
          <div className="py-2.5 px-4 block w-full border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
            Se autocompletará cuando navegues por la web
          </div>
        </div>
        <Button
          variant="soft"
          color="yellow"
          onClick={() => addResource("Soy un recurso")}
        >
          Seleccionar recurso
        </Button>
        <div>
          <label className="block text-sm font-medium mb-2 dark:text-white">
            Recursos seleccionados
          </label>
          <div className="py-2.5 px-4 block w-full border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
            {resources.length === 0
              ? "Aún no se ha seleccionado ningún recurso."
              : resources.map((rsc, index) => (
                  <div key={index} className="flex gap-4">
                    <WebIcon />
                    <span className="font-medium">{rsc}</span>
                  </div>
                ))}
          </div>
        </div>
        <Button
          variant="solid"
          color="blue"
          onClick={async () => {
            await window.ipcRenderer.invoke("modal", true);
            openModalComplex();
          }}
        >
          Finalizar tarea 1
        </Button>
      </div>
      {isModalNavigationOpen && (
        <NavigationModal
          onSubmit={async ({ rated }) => {
            await window.ipcRenderer.invoke("modal", false);
            ratedNavigation("https://google.com", rated!);
            closeModalNavigation();
          }}
        />
      )}
      {isModalComplex && (
        <ComplexModal
          onSubmit={async ({ rated }) => {
            await window.ipcRenderer.invoke("modal", false);
            setComplex(rated!);
            closeModalComplex();
            nextView();
          }}
        />
      )}
    </>
  );
};
