import { createClient } from "@supabase/supabase-js";
import { QueryClient } from "@tanstack/react-query";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const queryClient = new QueryClient();
