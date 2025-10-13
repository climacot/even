import { create } from "zustand";

type State = {
  complex?: number;
  currentUrl?: string;
  currentView: number;
  feeling?: number;
  fullName?: string;
  prevUrl?: string;
  sessionId?: string;
  taskTimeEnd?: Date;
  taskTimeStart?: Date;
  navigations: {
    url: string;
    rated?: number;
    ratedAt?: Date;
    navigatedAt: Date;
  }[];
  addNavigation: (url: string) => void;
  nextView: () => void;
  prevView: () => void;
  ratedNavigation: (url: string, rated: number) => void;
  reset: () => void;
  resetView: () => void;
  setComplex: (rated: number) => void;
  setCurrentUrl: (url?: string) => void;
  setFeeling: (rated: number) => void;
  setFullName: (fullName: string) => void;
  setPrevUrl: (url?: string) => void;
  setSessionId: (sessionId: string) => void;
  setTaskTimeEnd: () => void;
  setTaskTimeStart: () => void;
};

const initialState = {
  complex: undefined,
  currentUrl: undefined,
  currentView: 1,
  feeling: undefined,
  fullName: undefined,
  navigations: [],
  prevUrl: undefined,
  sessionUid: undefined,
  taskTimeEnd: undefined,
  taskTimeStart: undefined,
};

export const useStore = create<State>((set) => ({
  ...initialState,
  addNavigation: (url) => {
    set((state) => ({
      navigations: [...state.navigations, { url, navigatedAt: new Date() }],
    }));
  },
  ratedNavigation: (url, rated) => {
    set((state) => ({
      navigations: state.navigations.map((n) => {
        if (n.url === url) return { ...n, rated, ratedAt: new Date() };
        return n;
      }),
    }));
  },
  nextView: () => set((state) => ({ currentView: state.currentView + 1 })),
  prevView: () => set((state) => ({ currentView: state.currentView - 1 })),
  reset: () => set({ ...initialState }),
  resetView: () => set({ currentView: 1 }),
  setComplex: (rated) => set({ complex: rated }),
  setCurrentUrl: (url) => set({ currentUrl: url }),
  setFeeling: (rated) => set({ feeling: rated }),
  setFullName: (rated) => set({ fullName: rated }),
  setPrevUrl: (url) => set({ prevUrl: url }),
  setSessionId: (sessionId) => set({ sessionId }),
  setTaskTimeEnd: () => set({ taskTimeEnd: new Date() }),
  setTaskTimeStart: () => set({ taskTimeStart: new Date() }),
}));
