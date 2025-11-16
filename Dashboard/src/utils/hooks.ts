import { useQuery } from "@tanstack/react-query";
import { api } from "./services";

const KEYS = {
  CANTIDAD_SESIONES: 1,
  CANTIDAD_RECURSOS_CALIFICADOS: 2,
  PROMEDIO_TIEMPO_SESION: 3,
  PROMEDIO_RECURSOS_CALIFICADOS: 4,
  RECURSOS_PERTINENCIA_EVALUACION_AUTOMATICA: 5,
  RECURSO_PERTINENCIA_CONTEO: 6,
  RECURSOS_PERTINENCIA_TIEMPO_ENCONTRAR: 7,
};

const useCantidadSesiones = () => {
  return useQuery({
    queryKey: [KEYS.CANTIDAD_SESIONES],
    queryFn: api.obtenerCantidadSesiones,
  });
};

const useCantidadRecursosCalificados = () => {
  return useQuery({
    queryKey: [KEYS.CANTIDAD_RECURSOS_CALIFICADOS],
    queryFn: api.obtenerCantidadRecursosCalificados,
  });
};

const usePromedioTiempoSesion = () => {
  return useQuery({
    queryKey: [KEYS.PROMEDIO_TIEMPO_SESION],
    queryFn: api.obtenerPromedioTiempoSesion,
  });
};

const usePromedioRecursosCalificados = () => {
  return useQuery({
    queryKey: [KEYS.PROMEDIO_RECURSOS_CALIFICADOS],
    queryFn: api.obtenerPromedioRecursosCalificados,
  });
};

const useRecursosPertinenciaEvaluacionAutomatica = () => {
  return useQuery({
    queryKey: [KEYS.RECURSOS_PERTINENCIA_EVALUACION_AUTOMATICA],
    queryFn: api.obtenerRecursosPertinenciaEvaluacionAutomatica,
  });
};

const useRecursoPertinenciaConteo = () => {
  return useQuery({
    queryKey: [KEYS.RECURSO_PERTINENCIA_CONTEO],
    queryFn: api.obtenerConteoPertinenciaRecurso,
  });
};

const useRecursosPertinenciaTiempoEncontrar = () => {
  return useQuery({
    queryKey: [KEYS.RECURSOS_PERTINENCIA_TIEMPO_ENCONTRAR],
    queryFn: api.obtenerPertinenciaTiempoEncontrar,
  });
};

export const hooks = {
  useCantidadSesiones,
  useCantidadRecursosCalificados,
  usePromedioTiempoSesion,
  usePromedioRecursosCalificados,
  useRecursosPertinenciaEvaluacionAutomatica,
  useRecursoPertinenciaConteo,
  useRecursosPertinenciaTiempoEncontrar,
};
