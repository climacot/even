import { create } from "zustand";

type Navigation = {
  url: string;
  time: number;
  isRated: boolean;
  isSelected: boolean;
  rated?: string;
  selectTime?: number;
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
  sessionUid?: string;
  setSessionUid: (sessionUid: string) => void;
  removeSessionUid: () => void;
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
  addResource: (value) => {
    set((state) => ({
      navigation: state.navigation.map((nav) => {
        if (nav.url === value) {
          return {
            ...nav,
            isSelected: true,
            selectTime: Date.now(),
          };
        }

        return nav;
      }),
    }));
  },
  navigation: [],
  addNavigation: (value) => {
    set((state) => ({
      navigation: [
        ...state.navigation,
        {
          url: value,
          isRated: false,
          isSelected: false,
          time: Date.now(),
        },
      ],
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
      navigation: [],
      complex: undefined,
      currentUrl: undefined,
      taskTimeEnd: undefined,
      taskTimeStart: undefined,
      prevUrl: undefined,
      sessionUid: undefined,
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
  sessionUid: undefined,
  setSessionUid: (uid) => set({ sessionUid: uid }),
  removeSessionUid: () => set({ sessionUid: undefined }),
}));
