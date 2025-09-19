import { Button } from "@/components/button";
import { useStore } from "@/hooks/use-store";

export const FinalView = () => {
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
    <div>
      <div>¡Tareas finalizadas!</div>
      <div>Gracias por participar en esta prueba, picos 😘</div>
      <div>
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
