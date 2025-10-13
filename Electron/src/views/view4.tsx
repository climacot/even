import { Button } from "@/components/button";
import { useStore } from "@/hooks/use-store";
import { createSession } from "@/services/database";
import { useState } from "react";
import toast from "react-hot-toast";

export const View4 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const store = useStore();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <div className="text-lg font-semibold">¡Tareas finalizadas!</div>
      <div>Gracias por participar en esta prueba</div>
      <Button
        color="blue"
        variant="solid"
        disabled={isLoading}
        onClick={async () => {
          try {
            setIsLoading(true);

            await createSession({
              complex: 0,
              experience: 0,
              feeling: 0,
              fullName: "",
              navigations: [],
              sessionId: "",
              taskTimeEnd: new Date(),
              taskTimeStart: new Date(),
            });

            store.reset();

            toast.success("Sesión finalizada.");

            window.ipcRenderer.send("go-home");
          } catch (error) {
            error instanceof Error && toast.error(error.message);
          } finally {
            setIsLoading(false);
          }
        }}
      >
        Regresar al inicio
      </Button>
    </div>
  );
};
