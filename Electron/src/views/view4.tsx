import { Button } from "@/components/button";
import { useStore } from "@/hooks/use-store";
import { supabase } from "@/services/services";
import { useState } from "react";

export const View4 = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    fullName,
    experience,
    feeling,
    navigation,
    taskTimeStart,
    taskTimeEnd,
    sessionUid,
    complex,
    reset,
  } = useStore();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <div className="text-lg font-semibold">¡Tareas finalizadas!</div>
      <div>Gracias por participar en esta prueba, picos 😘</div>
      <div className="my-4 text-center break-all">
        {JSON.stringify({
          fullName,
          experience,
          feeling,
          navigation,
          complex,
          taskTimeStart,
          taskTimeEnd,
        })}
      </div>
      <Button
        color="blue"
        variant="solid"
        disabled={isLoading}
        onClick={async () => {
          try {
            setIsLoading(true);

            const { error } = await supabase.rpc("save_data", {
              p_full_name: fullName,
              p_experience: Number(experience),
              p_feeling: Number(feeling),
              p_navigation: navigation.map((n) => ({
                ...n,
                time: new Date(n.time),
                selectTime: new Date(n.selectTime!),
                rated: isNaN(Number(n.rated)) ? 0 : Number(n.rated),
              })),
              p_complex: Number(complex),
              p_task_time_start: new Date(taskTimeStart!),
              p_task_time_end: new Date(taskTimeEnd!),
              p_session_uid: sessionUid,
            });

            if (error) throw new Error(error.message);

            reset();

            window.ipcRenderer.send("go-home");
          } catch (error) {
            console.error(error);
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
