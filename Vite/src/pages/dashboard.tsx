import { useState } from "react";
import { useStore } from "../hooks/use-store";
import { supabase } from "../services/services";
import { useQuery } from "@tanstack/react-query";
import { getUnevaluatedResources } from "../services/database";

export const DashboardPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setIsSignedIn } = useStore();

  const query = useQuery({
    queryKey: ["task"],
    queryFn: getUnevaluatedResources,
  });

  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
      <button
        className="border p-2 bg-blue-100 cursor-pointer"
        disabled={isLoading}
        onClick={async () => {
          try {
            setIsLoading(true);
            await supabase.auth.signOut();
            setIsSignedIn(false);
          } catch (error) {
            console.error(error);
          } finally {
            setIsLoading(false);
          }
        }}
      >
        Salir
      </button>
      <button
        className="border p-2 bg-blue-100 cursor-pointer disabled:cursor-default"
        disabled={isLoading}
        onClick={async () => {
          try {
            setIsLoading(true);

            const {
              data: { session },
            } = await supabase.auth.getSession();

            await fetch("http://127.0.0.1:8000", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${session!.access_token}`,
              },
            });

            await query.refetch();
          } catch (error) {
            console.error(error);
          } finally {
            setIsLoading(false);
          }
        }}
      >
        {isLoading ? "Procesando..." : "Procesar recursos"}
      </button>
      <div>
        {query.isLoading
          ? "..."
          : isLoading
          ? `Procesando ${query.data?.length} recursos`
          : `${query.data?.length} recursos a procesar`}
      </div>
    </div>
  );
};
