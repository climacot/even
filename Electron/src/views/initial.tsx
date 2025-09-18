import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useStore } from "@/hooks/use-store";
import { useForm, Controller } from "react-hook-form";

export const InitialView = () => {
  const { nextView, setFullName } = useStore();

  const form = useForm({
    defaultValues: {
      fullName: "",
    },
  });

  return (
    <form
      onSubmit={form.handleSubmit(({ fullName }) => {
        setFullName(fullName);
        nextView();
      })}
    >
      <div className="font-bold text-2xl">SFE3000</div>
      <h1>Bienvenid@ a EVAEN</h1>
      <p>
        Gracias por participar en esta prueba, antes de continuar por favor
        complete esta información:
      </p>
      <Controller
        name="fullName"
        control={form.control}
        rules={{
          required: {
            value: true,
            message: "El nombre completo es requerido.",
          },
        }}
        render={({ field, fieldState }) => (
          <Input
            label="Nombre completo"
            isError={fieldState.invalid}
            errorMessage={fieldState.error?.message}
            {...field}
          />
        )}
      />
      <Button
        variant="solid"
        color="blue"
        disabled={!form.formState.isValid}
        type="submit"
      >
        Continuar
      </Button>
    </form>
  );
};
