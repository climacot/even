import { create } from "zustand";

type Navigation = {
  url: string;
  time: number;
  isRated: boolean;
  rated?: string;
};

type Resource = {
  url: string;
  time: number;
};

type State = {
  currentView: number;
  nextView: () => void;
  prevView: () => void;
  resetView: () => void;
  fullName?: string;
  setFullName: (value: string) => void;
  experience?: string;
  setExperience: (value: string) => void;
  feeling?: string;
  setFeeling: (value: string) => void;
  resources: Resource[];
  addResource: (url: string) => void;
  navigation: Navigation[];
  addNavigation: (url: string) => void;
  ratedNavigation: (url: string, rated: string) => void;
  complex?: string;
  setComplex: (rated: string) => void;
  reset: () => void;
  currentUrl?: string;
  setCurrentUrl: (url?: string) => void;
  prevUrl?: string;
  setPrevUrl: (url?: string) => void;
  taskTimeStart?: number;
  taskTimeEnd?: number;
  setTaskTimeStart: () => void;
  setTaskTimeEnd: () => void;
};

export const useStore = create<State>((set) => ({
  currentView: 1,
  nextView: () => set((state) => ({ currentView: state.currentView + 1 })),
  prevView: () => set((state) => ({ currentView: state.currentView - 1 })),
  resetView: () => set({ currentView: 1 }),
  fullName: undefined,
  setFullName: (value) => set({ fullName: value }),
  experience: undefined,
  setExperience: (value) => set({ experience: value }),
  feeling: undefined,
  setFeeling: (value) => set({ feeling: value }),
  resources: [],
  addResource: (url) => {
    set((state) => ({ resources: [...state.resources, { url, time: Date.now() }] }));
  },
  navigation: [],
  addNavigation: (value) => {
    set((state) => ({
      navigation: [...state.navigation, { url: value, isRated: false, time: Date.now() }],
    }));
  },
  ratedNavigation: (value, rated) => {
    set((state) => ({
      navigation: state.navigation.map((nav) => {
        if (nav.url === value) return { ...nav, isRated: true, rated };
        return nav;
      }),
    }));
  },
  complex: undefined,
  setComplex: (rated) => set({ complex: rated }),
  reset: () => {
    set({
      currentView: 1,
      fullName: undefined,
      experience: undefined,
      feeling: undefined,
      resources: [],
      navigation: [],
    });
  },
  currentUrl: undefined,
  setCurrentUrl: (url) => set({ currentUrl: url }),
  prevUrl: undefined,
  setPrevUrl: (url) => set({ prevUrl: url }),
  taskTimeStart: undefined,
  taskTimeEnd: undefined,
  setTaskTimeStart: () => set({ taskTimeStart: Date.now() }),
  setTaskTimeEnd: () => set({ taskTimeEnd: Date.now() }),
}));
