import { supabase } from "./services";

export const getUnevaluatedResources = async (): Promise<{ id: string }[]> => {
  const { data } = await supabase
    .rpc("get_unevaluated_resources")
    .throwOnError();

  return data;
};
