import { supabase } from "@/services/services";

export const createSession = async ({
  complex,
  feeling,
  fullName,
  navigations,
  sessionId,
  taskTimeEnd,
  taskTimeStart,
  taskId,
}: {
  complex: number;
  feeling: number;
  fullName: string;
  sessionId: string;
  taskTimeEnd: Date;
  taskTimeStart: Date;
  taskId: string;
  navigations: {
    url: string;
    rated: number;
    ratedAt: Date;
    navigatedAt: Date;
  }[];
}) => {
  await supabase
    .rpc("create_session", {
      p_complex: complex,
      p_feeling: feeling,
      p_full_name: fullName,
      p_session_id: sessionId,
      p_task_time_end: taskTimeEnd,
      p_task_time_start: taskTimeStart,
      p_navigations: navigations,
      p_cat_task_id: taskId,
    })
    .throwOnError();
};

export const getTask = async () => {
  const { data } = await supabase.rpc("get_task").throwOnError();

  if (!data) throw new Error("Task not found.");

  return {
    id: data.id,
    description: data.description,
    createdAt: data.created_at,
  };
};
