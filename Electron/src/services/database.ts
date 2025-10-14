import { supabase } from "@/services/services";

export const createSession = async ({
  complex,
  feeling,
  fullName,
  navigations,
  sessionId,
  taskTimeEnd,
  taskTimeStart,
}: {
  complex: number;
  feeling: number;
  fullName: string;
  sessionId: string;
  taskTimeEnd: Date;
  taskTimeStart: Date;
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
      p_cat_task_id: "e8c2a5fb-3b18-4d5b-ac24-a4ccaadc4f7b",
    })
    .throwOnError();
};
