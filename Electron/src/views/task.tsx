import { Button } from "@/components/button";
import { Likert } from "@/components/likert";
import { Modal } from "@/components/modal";
import { useModal } from "@/hooks/use-modal";
import { useStore } from "@/hooks/use-store";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

type ComplexFormState = {
  rated?: string;
};

type NavigationFormState = {
  rated?: string;
};

const NavigationModal = ({
  url,
  isModalOpen,
  closeModal,
}: {
  url: string;
  isModalOpen: boolean;
  closeModal: () => void;
}) => {
  const { ratedNavigation } = useStore();

  const form = useForm<NavigationFormState>({
    defaultValues: {
      rated: undefined,
    },
  });

  return (
    isModalOpen && (
      <Modal>
        <form
          onSubmit={form.handleSubmit(({ rated }) => {
            ratedNavigation(url, rated!);
            closeModal();
          })}
        >
          <div>Clasificación del resultado anterior</div>
          <div>Clasifique en base a la siguiente escala</div>
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
    )
  );
};

const ComplexModal = ({
  isModalOpen,
  closeModal,
}: {
  isModalOpen: boolean;
  closeModal: () => void;
}) => {
  const { nextView, setComplex } = useStore();

  const form = useForm<ComplexFormState>({
    defaultValues: {
      rated: undefined,
    },
  });

  return (
    isModalOpen && (
      <Modal>
        <form
          onSubmit={form.handleSubmit(({ rated }) => {
            setComplex(rated!);
            closeModal();
            nextView();
          })}
        >
          <div>Clasificación complejidad tarea 1</div>
          <div>Clasifique en base a la siguiente escala</div>
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
          <Button variant="solid" color="white" onClick={() => closeModal()}>
            Cancelar
          </Button>
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
    )
  );
};

export const TaskView = () => {
  const { resources, addResource, addNavigation } = useStore();

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
    addNavigation("https://google.com");
    openModalNavgation();
  }, []);

  return (
    <>
      <div>
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
          <div className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
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
          <div className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
            {resources.length === 0
              ? "Aún no se ha seleccionado ningún recurso."
              : resources.map((rsc, index) => <div key={index}>{rsc}</div>)}
          </div>
        </div>
        <Button
          variant="solid"
          color="blue"
          onClick={() => {
            openModalComplex();
          }}
        >
          Finalizar tarea 1
        </Button>
      </div>
      <NavigationModal
        isModalOpen={isModalNavigationOpen}
        closeModal={closeModalNavigation}
        url="https://google.com"
      />
      <ComplexModal
        isModalOpen={isModalComplex}
        closeModal={closeModalComplex}
      />
    </>
  );
};
