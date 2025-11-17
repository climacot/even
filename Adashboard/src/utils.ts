import { QueryClient } from "@tanstack/react-query";
import { createClient } from "@supabase/supabase-js";

export const queryClient = new QueryClient();

const supabaseUrl = "https://hgsxnscedselcjiucliu.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhnc3huc2NlZHNlbGNqaXVjbGl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2MDUwMTMsImV4cCI6MjA3NTE4MTAxM30.Bz8FvRMIoBEeLLfwiZYV__29a9DTcn9uSxXgbBBHOuc";

export const supabase = createClient(supabaseUrl, supabaseKey);
