import { Button } from "@/components/buttons/button";
import { Controller, useForm } from "react-hook-form";
import { Layout } from "@/components/layouts/layout";
import { Likert } from "@/components/inputs/likert";
import { useStore } from "@/hooks/use-store";
import { useTask } from "@/hooks/use-task";
import toast from "react-hot-toast";
import { Task } from "@/components/layouts/task";
import { electron } from "@/services/electron";

export const View2 = () => {
  const { task } = useTask();
  const { nextView, setFeeling, setTaskTimeStart, setTaskId } = useStore();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      experience: "",
      feeling: "",
    },
  });

  const onSubmit = handleSubmit(async ({ feeling }) => {
    setFeeling(Number(feeling));
    setTaskId(task!.id);
    setTaskTimeStart();

    await electron.showBrowser();

    toast.success("Tarea iniciada.");

    nextView();
  });

  return (
    <form onSubmit={onSubmit}>
      <Layout>
        <Layout.Header>
          <Task description={task?.description} />
        </Layout.Header>
        <Layout.Body>
          <Controller
            name="feeling"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
              <Likert
                label="¿Qué tan seguro se encuentra en que encontrará almenos un resultado?"
                values={["1", "2", "3", "4", "5"]}
                labels={["poca seguro", "neutral", "muy seguro"]}
                variant="horizontal"
                onChange={onChange}
              />
            )}
          />
        </Layout.Body>
        <Layout.Footer>
          <Button disabled={!task} variant="solid" color="blue" type="submit">
            Iniciar tarea
          </Button>
        </Layout.Footer>
      </Layout>
    </form>
  );
};
