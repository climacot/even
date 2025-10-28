import { Button } from "@/components/buttons/button";
import TaskIcon from "@/components/icons/task";
import { useStore } from "@/hooks/use-store";

export const View4 = () => {
  const store = useStore();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8 gap-12">
      <div className="bg-yellow-50 p-12">
        <TaskIcon />
      </div>
      <div className="text-center">
        <div className="text-lg font-semibold">¡Tarea finalizada!</div>
        <div className="mb-4">Gracias por participar en esta prueba.</div>
      </div>
      <Button
        color="blue"
        variant="solid"
        onClick={() => {
          store.reset();

          window.ipcRenderer.send("go-home");
        }}
      >
        Iniciar nueva sesión
      </Button>
    </div>
  );
};
