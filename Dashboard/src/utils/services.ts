import type {
  RecursoPertinenciaConteo,
  RecursoPertinenciaEvaluacionAutomatica,
  RecursoPertinenciaTiempoEncontrar,
} from "./models";
import supabase from "./supabase";

const obtenerCantidadSesiones = async () => {
  return await supabase.rpc("obtener_cantidad_sesiones").throwOnError();
};

const obtenerCantidadRecursosCalificados = async () => {
  return await supabase
    .rpc("obtener_cantidad_recursos_calificados")
    .throwOnError();
};

const obtenerPromedioTiempoSesion = async () => {
  return await supabase.rpc("obtener_promedio_tiempo_sesion").throwOnError();
};

const obtenerPromedioRecursosCalificados = async () => {
  return await supabase
    .rpc("obtener_promedio_recursos_calificados")
    .throwOnError();
};

const obtenerRecursosPertinenciaEvaluacionAutomatica = async (): Promise<
  RecursoPertinenciaEvaluacionAutomatica[]
> => {
  const { data } = await supabase.rpc(
    "obtener_recursos_pertinencia_evaluacion_automatica"
  );

  return data;
};

const obtenerConteoPertinenciaRecurso = async (): Promise<
  RecursoPertinenciaConteo[]
> => {
  const { data } = await supabase.rpc("obtener_recursos_pertinencia_conteo");
  return data;
};

const obtenerPertinenciaTiempoEncontrar = async (): Promise<
  RecursoPertinenciaTiempoEncontrar[]
> => {
  const { data } = await supabase.rpc("obtener_pertinencia_tiempo_encontrar");
  return data;
};

export const api = {
  obtenerCantidadSesiones,
  obtenerCantidadRecursosCalificados,
  obtenerPromedioTiempoSesion,
  obtenerPromedioRecursosCalificados,
  obtenerRecursosPertinenciaEvaluacionAutomatica,
  obtenerConteoPertinenciaRecurso,
  obtenerPertinenciaTiempoEncontrar,
};
