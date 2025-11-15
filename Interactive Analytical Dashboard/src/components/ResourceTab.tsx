import { useQuery } from "@tanstack/react-query";
import { supabase } from "../utils";
import clsx from "clsx";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
} from "recharts";

// Custom Tooltip para los gráficos de barras
const CustomBarTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "var(--popover)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
          padding: "12px",
          color: "var(--popover-foreground)",
        }}
      >
        <p
          style={{
            margin: "0 0 8px 0",
            fontWeight: "var(--font-weight-medium)",
          }}
        >
          {label}
        </p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ margin: "4px 0", fontSize: "14px" }}>
            <span style={{ color: entry.color }}>●</span> Pertinencia{" "}
            {entry.name.toLowerCase()}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// Datos para gráficos de dispersión
const scatterDataClicks = Array.from({ length: 50 }, () => ({
  x: Math.random() * 10,
  y: Math.random() * 10,
}));

const scatterDataTime = Array.from({ length: 50 }, () => ({
  x: Math.random() * 10,
  y: Math.random() * 10,
}));

const resourcesService = async () => {
  const {
    data,
  }: {
    data: Array<{ url: string; pertinence: number; qualifications: number }>;
  } = await supabase.rpc("get_resources_summary").throwOnError();

  if (!data) return [];

  return data.map((r, i) => ({
    ...r,
    pertinence: parseFloat(r.pertinence.toFixed(2)),
    rank: i + 1,
  }));
};

export type ResourceDetails = {
  pertinence: number;
  num_microdata: number;
  num_microformats: number;
  num_rdfa: number;
  num_jsonld: number;
  num_vocabularies: number;
  num_ontologies: number;
  num_datasets: number;
  fair_score: number;
  f1_score: number;
  f2_score: number;
  f3_score: number;
  f4_score: number;
  i1_score: number;
  i2_score: number;
  i3_score: number;
  seo_score: number;
  accesibility_score: number;
  performance_score: number;
};

const semanticDataService = async () => {
  const { data }: { data: ResourceDetails[] } = await supabase
    .rpc("get_resource_details")
    .throwOnError();

  const alta = data.filter((r) => r.pertinence >= 4);
  const media = data.filter((r) => r.pertinence >= 3 && r.pertinence < 4);
  const baja = data.filter((r) => r.pertinence <= 2);

  const calculateAverage = (
    group: ResourceDetails[],
    key: keyof ResourceDetails
  ) => {
    if (group.length === 0) return 0;
    const total = group.reduce((sum, r) => sum + (r[key] || 0), 0);
    return parseFloat((total / group.length).toFixed(2));
  };

  return [
    {
      category: "Microdatos",
      Alta: calculateAverage(alta, "num_microdata"),
      Media: calculateAverage(media, "num_microdata"),
      Baja: calculateAverage(baja, "num_microdata"),
    },
    {
      category: "Microformatos",
      Alta: calculateAverage(alta, "num_microformats"),
      Media: calculateAverage(media, "num_microformats"),
      Baja: calculateAverage(baja, "num_microformats"),
    },
    {
      category: "RDFa",
      Alta: calculateAverage(alta, "num_rdfa"),
      Media: calculateAverage(media, "num_rdfa"),
      Baja: calculateAverage(baja, "num_rdfa"),
    },
    {
      category: "Json-LD",
      Alta: calculateAverage(alta, "num_jsonld"),
      Media: calculateAverage(media, "num_jsonld"),
      Baja: calculateAverage(baja, "num_jsonld"),
    },
    {
      category: "Vocabulario",
      Alta: calculateAverage(alta, "num_vocabularies"),
      Media: calculateAverage(media, "num_vocabularies"),
      Baja: calculateAverage(baja, "num_vocabularies"),
    },
    {
      category: "Conj. datos",
      Alta: calculateAverage(alta, "num_datasets"),
      Media: calculateAverage(media, "num_datasets"),
      Baja: calculateAverage(baja, "num_datasets"),
    },
    {
      category: "Ontologías",
      Alta: calculateAverage(alta, "num_ontologies"),
      Media: calculateAverage(media, "num_ontologies"),
      Baja: calculateAverage(baja, "num_ontologies"),
    },
  ];
};

const webQualityDataService = async () => {
  const { data }: { data: ResourceDetails[] } = await supabase
    .rpc("get_resource_details")
    .throwOnError();

  const alta = data.filter((r) => r.pertinence >= 4);
  const media = data.filter((r) => r.pertinence >= 3 && r.pertinence < 4);
  const baja = data.filter((r) => r.pertinence <= 2);

  const calculateAverage = (
    group: ResourceDetails[],
    key: keyof ResourceDetails
  ) => {
    if (group.length === 0) return 0;
    const total = group.reduce((sum, r) => sum + (r[key] || 0), 0);
    return parseFloat((total / group.length).toFixed(2));
  };

  return [
    {
      category: "SEO",
      Alta: calculateAverage(alta, "seo_score"),
      Media: calculateAverage(media, "seo_score"),
      Baja: calculateAverage(baja, "seo_score"),
    },
    {
      category: "Accesibilidad",
      Alta: calculateAverage(alta, "accesibility_score"),
      Media: calculateAverage(media, "accesibility_score"),
      Baja: calculateAverage(baja, "accesibility_score"),
    },
    {
      category: "Rendimiento",
      Alta: calculateAverage(alta, "performance_score"),
      Media: calculateAverage(media, "performance_score"),
      Baja: calculateAverage(baja, "performance_score"),
    },
  ];
};

const fairDataService = async () => {
  const { data }: { data: ResourceDetails[] } = await supabase
    .rpc("get_resource_details")
    .throwOnError();

  const alta = data.filter((r) => r.pertinence >= 4);
  const media = data.filter((r) => r.pertinence >= 3 && r.pertinence < 4);
  const baja = data.filter((r) => r.pertinence <= 2);

  const calculateAverage = (
    group: ResourceDetails[],
    key: keyof ResourceDetails
  ) => {
    if (group.length === 0) return 0;
    const total = group.reduce((sum, r) => sum + (r[key] || 0), 0);
    return parseFloat((total / group.length).toFixed(2));
  };

  return [
    {
      category: "F1",
      Alta: calculateAverage(alta, "f1_score"),
      Media: calculateAverage(media, "f1_score"),
      Baja: calculateAverage(baja, "f1_score"),
    },
    {
      category: "F2",
      Alta: calculateAverage(alta, "f2_score"),
      Media: calculateAverage(media, "f2_score"),
      Baja: calculateAverage(baja, "f2_score"),
    },
    {
      category: "F3",
      Alta: calculateAverage(alta, "f3_score"),
      Media: calculateAverage(media, "f3_score"),
      Baja: calculateAverage(baja, "f3_score"),
    },
    {
      category: "F4",
      Alta: calculateAverage(alta, "f4_score"),
      Media: calculateAverage(media, "f4_score"),
      Baja: calculateAverage(baja, "f4_score"),
    },
    {
      category: "I1",
      Alta: calculateAverage(alta, "i1_score"),
      Media: calculateAverage(media, "i1_score"),
      Baja: calculateAverage(baja, "i1_score"),
    },
    {
      category: "I2",
      Alta: calculateAverage(alta, "i2_score"),
      Media: calculateAverage(media, "i2_score"),
      Baja: calculateAverage(baja, "i2_score"),
    },
    {
      category: "I3",
      Alta: calculateAverage(alta, "i3_score"),
      Media: calculateAverage(media, "i3_score"),
      Baja: calculateAverage(baja, "i3_score"),
    },
  ];
};

export function ResourceTab() {
  const fairData = useQuery({
    queryKey: ["fairData"],
    queryFn: fairDataService,
  });

  const webQualityData = useQuery({
    queryKey: ["webQualityData"],
    queryFn: webQualityDataService,
  });

  const semanticData = useQuery({
    queryKey: ["semanticData"],
    queryFn: semanticDataService,
  });

  const resources = useQuery({
    queryKey: ["resources"],
    queryFn: resourcesService,
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
      <div className="overflow-auto">
        <table className="border-collapse border border-gray-400 table-auto w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 text-nowrap">
                Pertinencia
              </th>
              <th className="border border-gray-300 p-2 text-nowrap">Top</th>
              <th className="border border-gray-300 p-2 text-nowrap">
                Recurso
              </th>
              <th className="border border-gray-300 p-2 text-nowrap">
                Prom. pertinencia
              </th>
              <th className="border border-gray-300 p-2 text-nowrap">
                Núm. Calificaciones
              </th>
            </tr>
          </thead>
          <tbody>
            {resources.data?.map((resource, i) => (
              <tr key={i}>
                <td
                  className={clsx(
                    "border border-transparent p-2",
                    resource.pertinence >= 4
                      ? "bg-[#22c55e]"
                      : resource.pertinence >= 3 && resource.pertinence < 4
                      ? "bg-[#eab308]"
                      : "bg-[#ef4444]"
                  )}
                ></td>
                <td className="border border-gray-300 p-2">{resource.rank}</td>
                <td className="border border-gray-300 truncate w-full max-w-0 p-2">
                  {resource.url}
                </td>
                <td className="border border-gray-300 p-2">
                  {resource.pertinence}
                </td>
                <td className="border border-gray-300 p-2">
                  {resource.qualifications}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Análisis de tecnologías semánticas */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <p
          style={{
            margin: 0,
            fontSize: "var(--text-base)",
            fontWeight: "var(--font-weight-semibold)",
            color: "var(--foreground)",
          }}
        >
          Análisis de tecnologías semánticas según los grupos de pertinencia
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {/* Pertinencia vs Estructuración semántica */}
          <div
            style={{
              backgroundColor: "var(--card)",
              border: "2px solid var(--border)",
              borderRadius: "16px",
              padding: "34px 26px",
            }}
          >
            <p
              style={{
                margin: "0 0 28px 0",
                textAlign: "center",
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--foreground)",
                letterSpacing: "0.08px",
              }}
            >
              Pertinencia ↔ Estructuración semántica
            </p>
            <div style={{ padding: "10px" }}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={semanticData.data || []}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis
                    dataKey="category"
                    stroke="var(--muted-foreground)"
                    style={{ fontSize: "12px" }}
                  />
                  <YAxis
                    stroke="var(--muted-foreground)"
                    style={{ fontSize: "12px" }}
                    label={{
                      value: "Cantidad",
                      angle: -90,
                      position: "insideLeft",
                      style: { fill: "grey", fontSize: "12px" },
                    }}
                  />
                  <Tooltip content={<CustomBarTooltip />} />
                  <Legend />
                  <Bar dataKey="Alta" fill="rgb(34, 197, 94)" barSize={20} />
                  <Bar dataKey="Media" fill="rgb(234, 179, 8)" barSize={20} />
                  <Bar dataKey="Baja" fill="rgb(239, 68, 68)" barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pertinencia vs Calidad web */}
          <div
            style={{
              backgroundColor: "var(--card)",
              border: "2px solid var(--border)",
              borderRadius: "16px",
              padding: "34px 26px",
            }}
          >
            <p
              style={{
                margin: "0 0 28px 0",
                textAlign: "center",
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--foreground)",
                letterSpacing: "0.08px",
              }}
            >
              Pertinencia ↔ Calidad web
            </p>
            <div style={{ padding: "10px" }}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={webQualityData.data || []}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis
                    dataKey="category"
                    stroke="var(--muted-foreground)"
                    style={{ fontSize: "12px" }}
                  />
                  <YAxis
                    stroke="var(--muted-foreground)"
                    style={{ fontSize: "12px" }}
                    label={{
                      value: "Adopción (%)",
                      angle: -90,
                      position: "insideLeft",
                      style: { fill: "grey", fontSize: "12px" },
                    }}
                  />
                  <Tooltip content={<CustomBarTooltip />} />
                  <Legend />
                  <Bar dataKey="Alta" fill="rgb(34, 197, 94)" barSize={20} />
                  <Bar dataKey="Media" fill="rgb(234, 179, 8)" barSize={20} />
                  <Bar dataKey="Baja" fill="rgb(239, 68, 68)" barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pertinencia vs FAIR */}
          <div
            style={{
              backgroundColor: "var(--card)",
              border: "2px solid var(--border)",
              borderRadius: "16px",
              padding: "34px 26px",
            }}
          >
            <p
              style={{
                margin: "0 0 28px 0",
                textAlign: "center",
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--foreground)",
                letterSpacing: "0.08px",
              }}
            >
              Pertinencia ↔ FAIR
            </p>
            <div style={{ padding: "10px" }}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={fairData.data || []}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis
                    dataKey="category"
                    stroke="var(--muted-foreground)"
                    style={{ fontSize: "12px" }}
                  />
                  <YAxis
                    stroke="var(--muted-foreground)"
                    style={{ fontSize: "12px" }}
                    label={{
                      value: "Adopción (%)",
                      angle: -90,
                      position: "insideLeft",
                      style: { fill: "grey", fontSize: "12px" },
                    }}
                  />
                  <Tooltip content={<CustomBarTooltip />} />
                  <Legend />
                  <Bar dataKey="Alta" fill="rgb(34, 197, 94)" barSize={20} />
                  <Bar dataKey="Media" fill="rgb(234, 179, 8)" barSize={20} />
                  <Bar dataKey="Baja" fill="rgb(239, 68, 68)" barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Reporte diagrama de dispersión */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <p
          style={{
            margin: 0,
            fontSize: "var(--text-base)",
            fontWeight: "var(--font-weight-semibold)",
            color: "var(--foreground)",
          }}
        >
          Reporte diagrama de dispersión
        </p>

        <div
          style={{
            backgroundColor: "var(--card)",
            border: "2px solid var(--border)",
            borderRadius: "16px",
            padding: "34px 26px",
          }}
        >
          <p
            style={{
              margin: "0 0 28px 0",
              textAlign: "center",
              fontSize: "var(--text-base)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--foreground)",
              letterSpacing: "0.08px",
            }}
          >
            Comportamiento usuarios a nivel de recursos
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
            }}
          >
            {/* Clics hasta encontrar */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p
                style={{
                  margin: 0,
                  textAlign: "center",
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-normal)",
                  color: "var(--foreground)",
                }}
              >
                Clics hasta encontrar
              </p>
              <ResponsiveContainer width="100%" height={250}>
                <ScatterChart
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                  <CartesianGrid stroke="var(--border)" />
                  <XAxis
                    type="number"
                    dataKey="x"
                    name="Recurso"
                    stroke="var(--muted-foreground)"
                    style={{ fontSize: "12px" }}
                  />
                  <YAxis
                    type="number"
                    dataKey="y"
                    name="Clics"
                    stroke="var(--muted-foreground)"
                    style={{ fontSize: "12px" }}
                  />
                  <Tooltip
                    cursor={{ strokeDasharray: "3 3" }}
                    contentStyle={{
                      backgroundColor: "var(--popover)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius)",
                      color: "var(--popover-foreground)",
                    }}
                  />
                  <Scatter data={scatterDataClicks} fill="rgb(34, 197, 94)" />
                  <Scatter
                    data={scatterDataClicks.slice(0, 20)}
                    fill="rgb(234, 179, 8)"
                  />
                  <Scatter
                    data={scatterDataClicks.slice(0, 30)}
                    fill="rgb(239, 68, 68)"
                  />
                </ScatterChart>
              </ResponsiveContainer>
            </div>

            {/* Tiempo hasta encontrar */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p
                style={{
                  margin: 0,
                  textAlign: "center",
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-normal)",
                  color: "var(--foreground)",
                }}
              >
                Tiempo hasta encontrar
              </p>
              <ResponsiveContainer width="100%" height={250}>
                <ScatterChart
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                  <CartesianGrid stroke="var(--border)" />
                  <XAxis
                    type="number"
                    dataKey="x"
                    name="Recurso"
                    stroke="var(--muted-foreground)"
                    style={{ fontSize: "12px" }}
                  />
                  <YAxis
                    type="number"
                    dataKey="y"
                    name="Tiempo"
                    stroke="var(--muted-foreground)"
                    style={{ fontSize: "12px" }}
                  />
                  <Tooltip
                    cursor={{ strokeDasharray: "3 3" }}
                    contentStyle={{
                      backgroundColor: "var(--popover)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius)",
                      color: "var(--popover-foreground)",
                    }}
                  />
                  <Scatter data={scatterDataTime} fill="rgb(34, 197, 94)" />
                  <Scatter
                    data={scatterDataTime.slice(0, 20)}
                    fill="rgb(234, 179, 8)"
                  />
                  <Scatter
                    data={scatterDataTime.slice(0, 30)}
                    fill="rgb(239, 68, 68)"
                  />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
