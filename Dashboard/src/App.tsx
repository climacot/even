import { EvaluacionAutomatica } from "./components/EvaluacionAutomatica";
import { PertinenciaTiempo } from "./components/PertinenciaTiempo";
import { ResumeCard } from "./components/ResumeCard";
import { hooks } from "./utils/hooks";

function App() {
  const cantidadSesiones = hooks.useCantidadSesiones();
  const cantidadRecursosCalificados = hooks.useCantidadRecursosCalificados();
  const promedioTiempoSesion = hooks.usePromedioTiempoSesion();
  const primedioRecursosCalificados = hooks.usePromedioRecursosCalificados();
  const recursosPertinenciaConteo = hooks.useRecursoPertinenciaConteo();
  const recursosPertienenciaTiempo =
    hooks.useRecursosPertinenciaTiempoEncontrar();

  return (
    <div>
      {cantidadSesiones.data && (
        <ResumeCard
          title="Total de sesiones"
          value={cantidadSesiones.data.data}
        />
      )}
      {cantidadRecursosCalificados.data && (
        <ResumeCard
          title="Total de recursos calificados"
          value={cantidadRecursosCalificados.data.data}
        />
      )}
      {promedioTiempoSesion.data && (
        <ResumeCard
          title="Promedio tiempo por sesión"
          value={promedioTiempoSesion.data.data}
        />
      )}
      {primedioRecursosCalificados.data && (
        <ResumeCard
          title="Promedio recursos calificados por sesión"
          value={primedioRecursosCalificados.data.data}
        />
      )}
      {recursosPertinenciaConteo.data && (
        <EvaluacionAutomatica recursos={recursosPertinenciaConteo.data} />
      )}
      {recursosPertienenciaTiempo.data && (
        <PertinenciaTiempo recursos={recursosPertienenciaTiempo.data} />
      )}
    </div>
  );
}

export default App;
