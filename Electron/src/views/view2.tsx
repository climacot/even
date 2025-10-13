import { Button } from "@/components/button";
import { Likert } from "@/components/likert";
import { useStore } from "@/hooks/use-store";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const View2 = () => {
  const { nextView, setFeeling, setTaskTimeStart } = useStore();

  const form = useForm({
    defaultValues: {
      experience: "",
      feeling: "",
    },
  });

  return (
    <form
      className="p-4 flex flex-col gap-4"
      onSubmit={form.handleSubmit(({ feeling }) => {
        setTaskTimeStart();
        setFeeling(Number(feeling));

        toast.success("Tarea iniciada.");

        nextView();
      })}
    >
      <div className="font-bold text-2xl">SFE3000</div>
      <div>Tarea 1/1</div>
      <p>
        Imagine que trabaja en un proyecto de clase sobre inteligencia artificial aplicado
        a la salud. Su tarea es encontrar un dataset confiable que contenga información
        sobre enfermedades o condiciones de salud.
      </p>
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
      <Button
        variant="solid"
        color="blue"
        disabled={!form.formState.isValid}
        type="submit"
      >
        Iniciar tarea 1
      </Button>
    </form>
  );
};
