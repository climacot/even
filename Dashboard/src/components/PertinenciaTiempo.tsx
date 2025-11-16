import type { RecursoPertinenciaTiempoEncontrar } from "../utils/models";
import {
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const PertinenciaTiempo = ({
  recursos,
}: {
  recursos: RecursoPertinenciaTiempoEncontrar[];
}) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <ScatterChart>
        <CartesianGrid />
        <XAxis
          type="number"
          name="Pertinencia"
          dataKey="pertinence_score"
          ticks={[1, 2, 3, 4, 5]}
        />
        <YAxis
          type="number"
          dataKey="tiempo_hasta_encontrar"
          name="Tiempo hasta encontrar"
        />
        <Legend />
        <Tooltip />
        <Scatter data={recursos} />
      </ScatterChart>
    </ResponsiveContainer>
  );
};
