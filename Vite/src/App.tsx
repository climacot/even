import { useState } from "react";
import { supabase } from "./services/services";

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <div>
      {isSignedIn ? (
        <button
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
      ) : (
        <form
          onSubmit={async (event) => {
            try {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              setIsLoading(true);
              const { error } = await supabase.auth.signInWithPassword({
                email: formData.get("username")!.toString(),
                password: formData.get("password")!.toString(),
              });
              if (error) throw new Error(error.message);
              setIsSignedIn(true);
            } catch (error) {
              console.error(error);
            } finally {
              setIsLoading(false);
            }
          }}
        >
          <input type="email" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <button disabled={isLoading} type="submit">
            Entrar
          </button>
        </form>
      )}
      {isSignedIn && (
        <button
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
            } catch (error) {
              console.error(error);
            } finally {
              setIsLoading(false);
            }
          }}
        >
          Procesar recursos
        </button>
      )}
    </div>
  );
};
