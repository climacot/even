import { useState } from "react";
import { useStore } from "../hooks/use-store";
import { supabase } from "../services/services";

export const SignInPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setIsSignedIn } = useStore();

  return (
    <form
      className="flex flex-col gap-2 justify-center items-center h-screen"
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
      <h1 className="font-semibold text-md">SFE3000</h1>
      <input
        type="email"
        name="username"
        placeholder="username"
        className="border p-2"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className="border p-2"
      />
      <button
        disabled={isLoading}
        type="submit"
        className="border p-2 bg-blue-100 cursor-pointer"
      >
        Entrar
      </button>
    </form>
  );
};
