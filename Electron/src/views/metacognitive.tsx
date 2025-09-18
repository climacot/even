import { Button } from "@/components/button";
import { Likert } from "@/components/likert";
import { useStore } from "@/hooks/use-store";
import { Controller, useForm } from "react-hook-form";

type State = {
  experience?: string;
  feeling?: string;
};

export const FeelingView = () => {
  const { nextView, setExperience, setFeeling } = useStore();

  const form = useForm<State>({
    defaultValues: {
      experience: undefined,
      feeling: undefined,
    },
  });

  return (
    <form
      onSubmit={form.handleSubmit(({ experience, feeling }) => {
        setExperience(experience!);
        setFeeling(feeling!);
        nextView();
      })}
    >
      <div className="font-bold text-2xl">SFE3000</div>
      <div>Tarea 1/1</div>
      <p>
        Imagina que trabajas en un proyecto de clase sobre inteligencia
        artificial aplicado a la salud. Tu tarea es encontrar un dataset
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
            label="¿Qué tan confiado se encuentra en que encontrará un datataset?"
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
