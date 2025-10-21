import { useStore } from "./hooks/use-store";
import { SignInPage } from "./pages/signin";
import { DashboardPage } from "./pages/dashboard";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/services";

export const App = () => {
  const { isSignedIn } = useStore();

  return (
    <QueryClientProvider client={queryClient}>
      {isSignedIn ? <DashboardPage /> : <SignInPage />}
    </QueryClientProvider>
  );
};
