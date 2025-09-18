import { useStore } from "@/hooks/use-store";
import { InitialView } from "./views/initial";
import { FeelingView } from "./views/metacognitive";
import { TaskView } from "./views/task";

export const App = () => {
  const { currentView } = useStore();

  return (
    <div>
      {currentView === 1 ? (
        <InitialView />
      ) : currentView === 2 ? (
        <FeelingView />
      ) : currentView === 3 ? (
        <TaskView />
      ) : null}
    </div>
  );

  // const [clicks, setClicks] = useState(0);
  // const [endAt, setEndAt] = useState<Date>();
  // const [startAt, setStartAt] = useState<Date>();
  // const [view, setView] = useState(1);
  // const [resources, setResources] = useState<string[]>([]);
  // const [link, setLink] = useState(
  //   "Se autoempleará cuando navegues por la web"
  // );
  // useEffect(() => {
  //   window.ipcRenderer.on("link-clicked", (_, link) => {
  //     setClicks((d) => d + 1);
  //     setLink(link);
  //   });
  // }, []);
  // return (
  //   <div className="h-screen flex">
  //     <div className="p-4 bg-gray-50 w-[20%]">
  //       {view === 1 ? (
  //         <>
  //           <p>
  //             Imagina que trabajas en un proyecto de clase sobre inteligencia
  //             artificial aplicado a la salud. Tu tarea es encontrar un dataset
  //             confiable que contenga información sobre enfermedades o
  //             condiciones de salud.
  //           </p>
  //           <Button
  //             onClick={() => {
  //               setStartAt(new Date());
  //               setView(2);
  //             }}
  //           >
  //             Iniciar tarea 1
  //           </Button>
  //         </>
  //       ) : view === 2 ? (
  //         <>
  //           <div>Recurso actual</div>
  //           <div className="max-w-sm space-y-3">
  //             <div className="border-2 break-all">{link}</div>
  //           </div>
  //           <Button
  //             disabled={!link}
  //             onClick={() => setResources((r) => [...r, link])}
  //           >
  //             Seleccionar recurso
  //           </Button>
  //           <div>Recursos seleccionados</div>
  //           <div>
  //             {resources.map((r) => (
  //               <div>{r}</div>
  //             ))}
  //           </div>
  //           <Button
  //             onClick={() => {
  //               const cl = clicks;
  //               const end = new Date();
  //               setEndAt(end);
  //               setView(1);
  //               alert(
  //                 `Gracias mi rey, inicio: ${startAt}, end: ${end}, clicks: ${cl}`
  //               );
  //               setStartAt(undefined);
  //               setEndAt(undefined);
  //               // setClicks(0);
  //             }}
  //           >
  //             Finalizar tarea
  //           </Button>
  //         </>
  //       ) : null}
  //     </div>
  //     <div className="flex flex-col w-[80%]">
  //       <div className="bg-gray-100 h-[5%]">
  //         <Button onClick={() => window.ipcRenderer.send("go-back")}>
  //           {"<"}
  //         </Button>
  //         <Button onClick={() => window.ipcRenderer.send("go-forward")}>
  //           {">"}
  //         </Button>
  //       </div>
  //       <div className="h-[95%]" />
  //     </div>
  //   </div>
  // );
};
