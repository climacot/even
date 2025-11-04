import { Button } from "@/components/buttons/button";
import { Controller, useForm } from "react-hook-form";
import { electron } from "@/services/electron";
import { Layout } from "@/components/layouts/layout";
import { Likert } from "@/components/inputs/likert";
import { Task } from "@/components/layouts/task";
import { useStore } from "@/hooks/use-store";
import { useTask } from "@/hooks/use-task";
import toast from "react-hot-toast";

export const View2 = () => {
  const { task } = useTask();

  const { nextView, setFeeling, setTaskId, setModalIsOpen } = useStore();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      experience: "",
      feeling: "",
    },
  });

  const onSubmit = handleSubmit(async ({ feeling }) => {
    setFeeling(Number(feeling));
    setTaskId(task!.id);

    await electron.showBrowser();
    await electron.openModal();
    setModalIsOpen(true);

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
                label="¿Qué tan seguro está de que encontrará lo que busca?"
                values={["1", "2", "3", "4", "5"]}
                labels={["poco seguro", "neutral", "muy seguro"]}
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
