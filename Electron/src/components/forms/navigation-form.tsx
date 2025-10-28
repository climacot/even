import { Controller, useForm } from "react-hook-form";
import { Likert } from "../inputs/likert";
import { Button } from "../buttons/button";

export const NavigationForm = ({
  onSubmit,
  onClose,
}: {
  onSubmit: ({ rated }: { rated: string }) => void;
  onClose: () => void;
}) => {
  const form = useForm({
    defaultValues: {
      rated: "",
    },
  });

  return (
    <form
      onSubmit={form.handleSubmit(({ rated }) => {
        onSubmit({ rated: rated! });
      })}
    >
      <div className="px-8 py-6 flex flex-col gap-4">
        <div className="text-lg font-bold">Califica el recurso</div>
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
                values={["5", "4", "3", "2", "1"]}
                label="¿Qué tan confiado se encuentra en que encontrará un datataset?"
                labels={[
                  "Es exactamente lo que busco.",
                  "Es interesante y, en general, parece coincidir con lo que busco.",
                  "Es relevante para la búsqueda, pero no tan interesante en relación con lo que busco.",
                  "Los términos de búsqueda se incluyen en la página, pero no son relevantes para la búsqueda.",
                  "No tiene nada que ver con lo que busco.",
                ]}
              />
            );
          }}
        />
      </div>
      <div className="px-4 py-3 flex bg-gray-100 gap-4 justify-end">
        <Button
          onClick={onClose}
          isFullWidth={false}
          variant="solid"
          color="white"
          type="button"
        >
          Cancelar
        </Button>
        <Button
          isFullWidth={false}
          disabled={!form.formState.isValid}
          variant="solid"
          color="blue"
          type="submit"
        >
          Calificar recurso
        </Button>
      </div>
    </form>
  );
};
