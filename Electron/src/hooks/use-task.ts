import { getTask } from "@/services/database";
import { useQuery } from "@tanstack/react-query";

export const useTask = () => {
  const query = useQuery({
    queryKey: ["task"],
    queryFn: getTask,
  });

  return {
    task: query.data,
  };
};
