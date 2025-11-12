import { Controller, useForm } from "react-hook-form";
import { Likert } from "../inputs/likert";
import { Button } from "../buttons/button";

export const ComplexForm = ({
  onSubmit,
  onClose,
  isLoading,
}: {
  isLoading?: boolean;
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
      className="min-w-lg"
      onSubmit={form.handleSubmit(({ rated }) => {
        onSubmit({ rated: rated! });
      })}
    >
      <div className="px-8 py-6 flex flex-col gap-4">
        <div className="text-lg font-bold">
          Califique la complejidad de la tarea
        </div>
        <Controller
          control={form.control}
          name="rated"
          rules={{ required: true }}
          render={({ field: { onChange } }) => {
            return (
              <Likert
                inverted
                onChange={(value) => onChange(value)}
                variant="horizontal"
                values={["1", "2", "3", "4", "5"]}
                labels={["tarea fácil", "neutral", "tarea compleja"]}
              />
            );
          }}
        />
      </div>
      <div className="px-4 py-3 flex bg-gray-100 gap-4 justify-end">
        <Button
          onClick={onClose}
          disabled={isLoading}
          isFullWidth={false}
          variant="solid"
          color="white"
          type="button"
        >
          Cancelar
        </Button>
        <Button
          isFullWidth={false}
          disabled={!form.formState.isValid || isLoading}
          variant="solid"
          color="blue"
          type="submit"
        >
          Calificar y finalizar tarea
        </Button>
      </div>
    </form>
  );
};
