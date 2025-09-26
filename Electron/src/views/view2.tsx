import { Button } from "@/components/button";
import { Likert } from "@/components/likert";
import { useStore } from "@/hooks/use-store";
import { Controller, useForm } from "react-hook-form";

type State = {
  experience?: string;
  feeling?: string;
};

export const View2 = () => {
  const { nextView, setExperience, setFeeling } = useStore();

  const form = useForm<State>({
    defaultValues: {
      experience: undefined,
      feeling: undefined,
    },
  });

  return (
    <form
      className="p-4 flex flex-col gap-4"
      onSubmit={form.handleSubmit(({ experience, feeling }) => {
        setExperience(experience!);
        setFeeling(feeling!);
        nextView();
      })}
    >
      <div className="font-bold text-2xl">SFE3000</div>
      <div>Tarea 1/1</div>
      <p>
        Imagine que trabaja en un proyecto de clase sobre inteligencia
        artificial aplicado a la salud. Su tarea es encontrar un dataset
        confiable que contenga información sobre enfermedades o condiciones de
        salud.
      </p>
      <Controller
        name="experience"
        control={form.control}
        rules={{ required: true }}
        render={({ field: { onChange } }) => (
          <Likert
            label="¿Qué tanta experiencia tiene buscando datasets?"
            values={["1", "2", "3", "4", "5"]}
            labels={["poca", "neutral", "mucha"]}
            onChange={(value) => onChange(value)}
            variant="horizontal"
          />
        )}
      />
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
