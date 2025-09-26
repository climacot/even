import { Button } from "@/components/button";
import { useStore } from "@/hooks/use-store";

export const View4 = () => {
  const {
    fullName,
    experience,
    feeling,
    resources,
    navigation,
    complex,
    resetView,
  } = useStore();

  return (
    <div className="h-screen flex flex-col justify-center items-center p-4">
      <div className="text-lg font-semibold">¡Tareas finalizadas!</div>
      <div>Gracias por participar en esta prueba, picos 😘</div>
      <div className="my-4 text-center">
        {JSON.stringify({
          fullName,
          experience,
          feeling,
          resources,
          navigation,
          complex,
        })}
      </div>
      <Button
        color="blue"
        variant="solid"
        onClick={() => {
          resetView();
        }}
      >
        Regresar al inicio
      </Button>
    </div>
  );
};
