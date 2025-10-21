import { Button } from "@/components/button";
import { Error } from "@/components/error";
import { Likert } from "@/components/likert";
import { useStore } from "@/hooks/use-store";
import { getTask } from "@/services/database";
import { useQuery } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const View2 = () => {
  const query = useQuery({
    queryKey: ["task"],
    queryFn: getTask,
  });

  const { nextView, prevView, setFeeling, setTaskTimeStart, setTaskId } = useStore();

  const form = useForm({
    defaultValues: {
      experience: "",
      feeling: "",
    },
  });

  return (
    <form
      className="p-4 flex flex-col gap-4"
      onSubmit={form.handleSubmit(async ({ feeling }) => {
        setFeeling(Number(feeling));
        setTaskId(query.data!.id);
        setTaskTimeStart();

        await window.ipcRenderer.invoke("web:visible", true);

        toast.success("Tarea iniciada.");

        nextView();
      })}
    >
      <div className="flex gap-2 items-center">
        <button
          className="bg-gray-100 rounded-full p-2 w-8 h-8 flex justify-center items-center cursor-pointer"
          onClick={() => prevView()}
        >
          ←
        </button>
        <div className="font-bold text-2xl">SFE3000</div>
      </div>
      <div>Tarea</div>
      <p>{query.data?.description ?? "..."}</p>
      <Controller
        name="feeling"
        control={form.control}
        rules={{ required: true }}
        render={({ field: { onChange } }) => (
          <Likert
            label="¿Qué tan confiad@ se encuentra en que encontrará un datataset?"
            values={["1", "2", "3", "4", "5"]}
            labels={["poca", "neutral", "mucha"]}
            onChange={(value) => onChange(value)}
            variant="horizontal"
          />
        )}
      />
      {query.error && <Error message={query.error.message} />}
      <Button
        variant="solid"
        color="blue"
        disabled={!form.formState.isValid || !query.data}
        type="submit"
      >
        Iniciar tarea 1
      </Button>
    </form>
  );
};
