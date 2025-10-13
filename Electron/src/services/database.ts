import { supabase } from "@/services/services";

export const createSession = async ({
  complex,
  experience,
  feeling,
  fullName,
  navigations,
  sessionId,
  taskTimeEnd,
  taskTimeStart,
}: {
  complex: number;
  experience: number;
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
      p_experience: experience,
      p_feeling: feeling,
      p_full_name: fullName,
      p_session_uid: sessionId,
      p_task_time_end: taskTimeEnd,
      p_task_time_start: taskTimeStart,
      p_navigations: navigations,
    })
    .throwOnError();
};
