import { Button } from "@/components/buttons/button";
import { Input } from "@/components/inputs/input";
import { Layout } from "@/components/layouts/layout";
import { supabase } from "@/services/services";
import { useForm, Controller } from "react-hook-form";
import { useStore } from "@/hooks/use-store";
import toast from "react-hot-toast";

export const View1 = () => {
  const { nextView, setFullName, setSessionId } = useStore();

  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm({
    defaultValues: {
      fullName: "",
    },
  });

  const onSubmit = handleSubmit(async ({ fullName }) => {
    try {
      const {
        data: { user },
      } = await supabase.auth.signInAnonymously();

      if (!user) return;

      await supabase.auth.updateUser({ data: { full_name: fullName } });

      setSessionId(user.id);
      setFullName(fullName.trim());
      nextView();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Layout>
        <Layout.Header>
          <div className="text-neutral-950">
            Gracias por participar en esta prueba, antes de continuar por favor
            completa esta información
          </div>
        </Layout.Header>
        <Layout.Body>
          <Controller
            name="fullName"
            control={control}
            rules={{
              required: {
                value: true,
                message: "El nombre completo es requerido.",
              },
              pattern: {
                value: /^(?!\s*$).+/,
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
        </Layout.Body>
        <Layout.Footer>
          <Button
            disabled={isSubmitting}
            variant="solid"
            type="submit"
            color="blue"
          >
            Continuar
          </Button>
        </Layout.Footer>
      </Layout>
    </form>
  );
};
