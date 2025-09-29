import { useStore } from "@/hooks/use-store";
import { View1 } from "@/views/view1";
import { View2 } from "@/views/view2";
import { View3 } from "@/views/view3";
import { View4 } from "@/views/view4";

export const App = () => {
  const { currentView } = useStore();

  return (
    <div className="h-screen w-[400px] border-r border-gray-200 bg-white">
      {currentView === 1 ? (
        <View1 />
      ) : currentView === 2 ? (
        <View2 />
      ) : currentView === 3 ? (
        <View3 />
      ) : currentView === 4 ? (
        <View4 />
      ) : null}
    </div>
  );
};
