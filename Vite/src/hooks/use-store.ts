import { create } from "zustand";

type State = {
  isSignedIn: boolean;
  setIsSignedIn: (isSignedIn: boolean) => void;
};

export const useStore = create<State>((set) => ({
  isSignedIn: false,
  setIsSignedIn: (isSignedIn) => set({ isSignedIn }),
}));
