import type { RecursoPertinenciaConteo } from "../utils/models";

// const agruparPorResourceId = (lista: RecursoPertinenciaConteo[]) => {
//   return lista.reduce<Record<string, RecursoPertinenciaConteo[]>>(
//     (acc, item) => {
//       if (!acc[item.resource_id]) acc[item.resource_id] = [];
//       acc[item.resource_id].push(item);
//       return acc;
//     },
//     {}
//   );
// };

import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
} from "recharts";

export const EvaluacionAutomatica = ({
  recursos,
}: {
  recursos: RecursoPertinenciaConteo[];
}) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <ScatterChart>
        <CartesianGrid />
        <XAxis type="number" dataKey="pertinence_score" name="Cantidad" />
        <YAxis
          type="number"
          dataKey="conteo"
          name="Pertinencia"
          ticks={[1, 2, 3, 4, 5]}
        />
        <Scatter data={recursos} />
      </ScatterChart>
    </ResponsiveContainer>
  );
};
