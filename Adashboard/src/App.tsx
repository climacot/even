import { useState } from "react";
import { IndicatorCard } from "./components/IndicatorCard";
import { CorrelationMatrix } from "./components/CorrelationMatrix";
import { SessionMatrixGroup } from "./components/SessionMatrixGroup";
import { ResourceTab } from "./components/ResourceTab";
import { GeneralTab } from "./components/GeneralTab";
import { Pagination } from "./components/Pagination";
import { Info } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "./utils";
import { taskMatrices, individualSessions } from "./data/mockData";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/ui/tooltip";

const generalIndicatorsService = async () => {
  const cantidadSesiones = await supabase
    .from("search_session")
    .select("*")
    .throwOnError();
  const totalRecursosEvaluados = await supabase
    .from("task_session_resource")
    .select("*")
    .filter("pertinence_score", "not.is", null)
    .throwOnError();
  const tiempoPromedioSesion = await supabase
    .rpc("promedio_sesion")
    .throwOnError();

  const [hours, minutes, seconds] = tiempoPromedioSesion.data
    .split(":")
    .map(Number);
    
  const totalMinutos = hours * 60 + minutes + seconds / 60;

  return [
    {
      label: "Cantidad de sesiones",
      value: cantidadSesiones.data.length.toString(),
      icon: "users",
    },
    {
      label: "Total de recursos evaluados",
      value: totalRecursosEvaluados.data.length.toString(),
      icon: "database",
    },
    {
      label: "Tiempo promedio de sesión",
      value: totalMinutos.toFixed(1) + " min",
      icon: "clock",
    },
  ];
};

export default function App() {
  const generalIndicators = useQuery({
    queryKey: ["generalIndicators"],
    queryFn: generalIndicatorsService,
  });

  // ----------------------------------------------------

  const [viewType, setViewType] = useState<
    "general" | "resources" | "average" | "individual"
  >("general");
  const [currentPage, setCurrentPage] = useState(1);
  const sessionsPerPage = 2;

  // Reset to page 1 when switching view types
  const handleViewTypeChange = (
    newViewType: "general" | "resources" | "average" | "individual"
  ) => {
    setViewType(newViewType);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card">
        <div className="max-w-[1600px] mx-auto px-6 pt-8 pb-12 pr-10 pl-10">
          <h1 className="text-foreground mb-2">
            Dashboard de Evaluación de Encontrabilidad
          </h1>
          <p className="text-muted-foreground">
            Análisis interactivo de correlaciones entre las variables de
            comportamiento de búsqueda y estructuración semántica en la
            encontrabilidad de la información.
          </p>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 py-8 space-y-12 pt-0[pr-10[32px] pl-10">
        {/* Indicadores Generales */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {generalIndicators.data?.map((indicator, index) => (
              <IndicatorCard key={index} {...indicator} />
            ))}
          </div>
        </section>

        {/* Report Level Tabs and Content */}
        <section>
          <div className="mb-6">
            <h2 className="text-foreground mb-4">Reporte a nivel</h2>
            <div className="inline-flex items-center bg-muted rounded-lg p-2 gap-2">
              <button
                onClick={() => handleViewTypeChange("general")}
                className={`px-[9px] py-[5px] rounded-lg transition-colors ${
                  viewType === "general"
                    ? "bg-card text-primary shadow-sm"
                    : "text-foreground"
                }`}
              >
                General
              </button>
              <button
                onClick={() => handleViewTypeChange("resources")}
                className={`px-[9px] py-[5px] rounded-lg transition-colors ${
                  viewType === "resources"
                    ? "bg-card text-primary shadow-sm"
                    : "text-foreground"
                }`}
              >
                Recursos
              </button>
              <button
                onClick={() => handleViewTypeChange("average")}
                className={`px-[9px] py-[5px] rounded-lg transition-colors ${
                  viewType === "average"
                    ? "bg-card text-primary shadow-sm"
                    : "text-foreground"
                }`}
              >
                Tarea
              </button>
              <button
                onClick={() => handleViewTypeChange("individual")}
                className={`px-[9px] py-[5px] rounded-lg transition-colors ${
                  viewType === "individual"
                    ? "bg-card text-primary shadow-sm"
                    : "text-foreground"
                }`}
              >
                Sesión individual
              </button>
            </div>
          </div>

          {/* Display content based on selected tab */}
          {viewType === "resources" ? (
            <div className="bg-card rounded-xl p-4">
              <ResourceTab />
            </div>
          ) : viewType === "general" ? (
            <div className="bg-card rounded-xl p-4">
              <GeneralTab />
            </div>
          ) : (
            <>
              {/* Correlaciones de Pearson header - only show for average and individual */}
              <div className="mb-6 flex items-center gap-2">
                <h2 className="text-foreground">Correlaciones de Pearson</h2>
                <TooltipProvider>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <button className="inline-flex items-center justify-center p-1 rounded-full hover:bg-muted transition-colors">
                        <Info className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="max-w-md p-4">
                      <div className="space-y-3">
                        <h4 className="text-popover-foreground mb-2">
                          Leyenda de correlaciones
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-5 h-5 rounded"
                              style={{ backgroundColor: "#15803d" }}
                            ></div>
                            <span className="text-sm text-popover-foreground">
                              Positiva fuerte (≥0.7)
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div
                              className="w-5 h-5 rounded"
                              style={{ backgroundColor: "#4ade80" }}
                            ></div>
                            <span className="text-sm text-popover-foreground">
                              Positiva moderada (0.4-0.7)
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div
                              className="w-5 h-5 border border-border rounded"
                              style={{ backgroundColor: "#f3f4f6" }}
                            ></div>
                            <span className="text-sm text-popover-foreground">
                              Débil o nula (&lt;0.4)
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div
                              className="w-5 h-5 rounded"
                              style={{ backgroundColor: "#f87171" }}
                            ></div>
                            <span className="text-sm text-popover-foreground">
                              Negativa moderada (-0.4 a -0.7)
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div
                              className="w-5 h-5 rounded"
                              style={{ backgroundColor: "#b91c1c" }}
                            ></div>
                            <span className="text-sm text-popover-foreground">
                              Negativa fuerte (≤-0.7)
                            </span>
                          </div>
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              {/* Display matrices based on view type */}
              <div className="space-y-6">
                {viewType === "average" ? (
                  // Show task matrices
                  taskMatrices.map((matrix) => (
                    <CorrelationMatrix key={matrix.id} matrix={matrix} />
                  ))
                ) : viewType === "individual" ? (
                  // Show individual session matrices grouped together with pagination
                  <>
                    {(() => {
                      const totalPages = Math.ceil(
                        individualSessions.length / sessionsPerPage
                      );
                      const startIndex = (currentPage - 1) * sessionsPerPage;
                      const endIndex = startIndex + sessionsPerPage;
                      const currentSessions = individualSessions.slice(
                        startIndex,
                        endIndex
                      );

                      return (
                        <>
                          <div className="space-y-6">
                            {currentSessions.map(
                              (sessionMatrices, sessionIndex) => {
                                const actualSessionIndex =
                                  startIndex + sessionIndex;
                                return (
                                  <SessionMatrixGroup
                                    key={actualSessionIndex}
                                    sessionName={
                                      sessionMatrices[0].sessionName ||
                                      `Sesión ${actualSessionIndex + 1}`
                                    }
                                    matrices={sessionMatrices}
                                  />
                                );
                              }
                            )}
                          </div>

                          {totalPages > 1 && (
                            <Pagination
                              currentPage={currentPage}
                              totalPages={totalPages}
                              onPageChange={(page) => setCurrentPage(page)}
                            />
                          )}
                        </>
                      );
                    })()}
                  </>
                ) : null}
              </div>
            </>
          )}
        </section>

        {/* Footer académico */}
        <section className="mt-12 p-6 bg-muted/30 border border-border rounded-lg">
          <h3 className="text-foreground mb-3">Objetivo del modelo</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Este dashboard presenta los resultados del modelo de evaluación de
            la encontrabilidad de la información, analizando cómo las variables
            de pertinencia, encontrabilidad, complejidad, calidad web,
            estructuración semántica y principios FAIR se correlacionan entre
            sí. Las correlaciones de Pearson permiten identificar patrones y
            validar hipótesis sobre los factores que mejoran la encontrabilidad
            de recursos digitales. Los resultados apoyan la toma de decisiones
            basada en evidencia para optimizar repositorios y sistemas de
            información.
          </p>
        </section>
      </div>
    </div>
  );
}
