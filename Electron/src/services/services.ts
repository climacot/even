import { createClient } from "@supabase/supabase-js";
import { QueryClient } from "@tanstack/react-query";

export const supabase = createClient(
  "https://hgsxnscedselcjiucliu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhnc3huc2NlZHNlbGNqaXVjbGl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2MDUwMTMsImV4cCI6MjA3NTE4MTAxM30.Bz8FvRMIoBEeLLfwiZYV__29a9DTcn9uSxXgbBBHOuc"
);

export const queryClient = new QueryClient();
