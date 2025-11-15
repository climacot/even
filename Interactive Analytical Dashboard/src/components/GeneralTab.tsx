import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

// Colores consistentes
const COLORS = {
  alta: 'rgb(34, 197, 94)',
  media: 'rgb(234, 179, 8)',
  baja: 'rgb(239, 68, 68)',
  primary: 'rgb(59, 130, 246)',
  secondary: 'rgb(168, 85, 247)',
  accent: 'rgb(236, 72, 153)',
};

// Datos generales agregados
const pertinenceDistribution = [
  { name: 'Alta', value: 3, percentage: 33.3 },
  { name: 'Media', value: 1, percentage: 11.1 },
  { name: 'Baja', value: 5, percentage: 55.6 },
];

const averagePertinenceScore = [
  { category: 'Alta', score: 4.33 },
  { category: 'Media', score: 3 },
  { category: 'Baja', score: 1.4 },
];

const technologyAdoption = [
  { name: 'Microdatos', adoption: 40 },
  { name: 'Json-LD', adoption: 32 },
  { name: 'Conj. datos', adoption: 40 },
  { name: 'Vocabulario', adoption: 22 },
  { name: 'Ontologías', adoption: 24 },
  { name: 'RDFa', adoption: 21 },
  { name: 'Microformatos', adoption: 9 },
];

const webQualityOverview = [
  { metric: 'SEO', alta: 100, media: 64, baja: 80 },
  { metric: 'Accesibilidad', alta: 46, media: 13, baja: 16 },
  { metric: 'Rendimiento', alta: 100, media: 64, baja: 80 },
];

const fairPrinciplesRadar = [
  { principle: 'Findable', alta: 69, media: 9, baja: 28 },
  { principle: 'Accessible', alta: 30, media: 64, baja: 27 },
  { principle: 'Interoperable', alta: 30, media: 64, baja: 27 },
  { principle: 'Reusable', alta: 69, media: 9, baja: 28 },
];

const qualificationsOverTime = [
  { session: 'S1', calificaciones: 10 },
  { session: 'S2', calificaciones: 10 },
  { session: 'S3', calificaciones: 10 },
  { session: 'S4', calificaciones: 10 },
  { session: 'S5', calificaciones: 15 },
  { session: 'S6', calificaciones: 15 },
  { session: 'S7', calificaciones: 20 },
  { session: 'S8', calificaciones: 25 },
  { session: 'S9', calificaciones: 10 },
];

// Custom Tooltips
const CustomPieTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: 'var(--popover)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: '12px',
        color: 'var(--popover-foreground)'
      }}>
        <p style={{ margin: '0 0 4px 0', fontWeight: 'var(--font-weight-medium)' }}>
          Pertinencia {payload[0].name.toLowerCase()}
        </p>
        <p style={{ margin: '4px 0', fontSize: '14px' }}>
          Recursos: {payload[0].value}
        </p>
        <p style={{ margin: '4px 0', fontSize: '14px' }}>
          Porcentaje: {payload[0].payload.percentage.toFixed(1)}%
        </p>
      </div>
    );
  }
  return null;
};

const CustomBarTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: 'var(--popover)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: '12px',
        color: 'var(--popover-foreground)'
      }}>
        <p style={{ margin: '0 0 8px 0', fontWeight: 'var(--font-weight-medium)' }}>{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ margin: '4px 0', fontSize: '14px' }}>
            <span style={{ color: entry.color }}>●</span> {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function GeneralTab() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      {/* Resumen ejecutivo */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p style={{ 
          margin: 0,
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--foreground)'
        }}>
          Resumen ejecutivo
        </p>
        
        <div style={{
          backgroundColor: 'var(--card)',
          border: '2px solid var(--border)',
          borderRadius: '16px',
          padding: '24px'
        }}>
          <p style={{
            margin: 0,
            fontSize: 'var(--text-sm)',
            color: 'var(--muted-foreground)',
            lineHeight: '1.6'
          }}>
            El análisis general revela que el 55.6% de los recursos evaluados presentan baja pertinencia, 
            mientras que solo el 33.3% alcanza alta pertinencia. Los recursos de alta pertinencia muestran 
            una adopción significativamente mayor de tecnologías semánticas (especialmente Microdatos y 
            conjuntos de datos) y mejores métricas de calidad web. Los principios FAIR están mejor 
            implementados en recursos de alta pertinencia, particularmente en aspectos de Findability (69%) 
            y Reusability (69%).
          </p>
        </div>
      </div>

      {/* Gráficos principales */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
        {/* Distribución de pertinencia - Gráfico de torta */}
        <div style={{
          backgroundColor: 'var(--card)',
          border: '2px solid var(--border)',
          borderRadius: '16px',
          padding: '34px 26px'
        }}>
          <p style={{ 
            margin: '0 0 28px 0',
            textAlign: 'center',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--foreground)',
            letterSpacing: '0.08px'
          }}>
            Distribución de recursos por pertinencia
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pertinenceDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percentage }) => `${name}: ${percentage.toFixed(1)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {pertinenceDistribution.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.name === 'Alta' ? COLORS.alta : entry.name === 'Media' ? COLORS.media : COLORS.baja} 
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomPieTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Puntuación promedio de pertinencia */}
        <div style={{
          backgroundColor: 'var(--card)',
          border: '2px solid var(--border)',
          borderRadius: '16px',
          padding: '34px 26px'
        }}>
          <p style={{ 
            margin: '0 0 28px 0',
            textAlign: 'center',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--foreground)',
            letterSpacing: '0.08px'
          }}>
            Puntuación promedio por categoría
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={averagePertinenceScore}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis 
                dataKey="category" 
                stroke="var(--muted-foreground)"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="var(--muted-foreground)"
                style={{ fontSize: '12px' }}
                domain={[0, 5]}
                ticks={[0, 1, 2, 3, 4, 5]}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--popover)', 
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  color: 'var(--popover-foreground)'
                }}
              />
              <Bar dataKey="score" fill={COLORS.primary} barSize={60}>
                {averagePertinenceScore.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`}
                    fill={entry.category === 'Alta' ? COLORS.alta : entry.category === 'Media' ? COLORS.media : COLORS.baja}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Adopción de tecnologías semánticas */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p style={{ 
          margin: 0,
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--foreground)'
        }}>
          Adopción de tecnologías semánticas
        </p>
        
        <div style={{
          backgroundColor: 'var(--card)',
          border: '2px solid var(--border)',
          borderRadius: '16px',
          padding: '34px 26px'
        }}>
          <p style={{ 
            margin: '0 0 28px 0',
            textAlign: 'center',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--foreground)',
            letterSpacing: '0.08px'
          }}>
            Comparativa de adopción de tecnologías
          </p>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={technologyAdoption}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis 
                dataKey="name" 
                stroke="var(--muted-foreground)"
                style={{ fontSize: '12px' }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                stroke="var(--muted-foreground)"
                style={{ fontSize: '12px' }}
                label={{ value: 'Adopción (%)', angle: -90, position: 'insideLeft', style: { fill: 'grey', fontSize: '12px' } }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--popover)', 
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  color: 'var(--popover-foreground)'
                }}
              />
              <Bar dataKey="adoption" fill={COLORS.primary} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Calidad web y FAIR */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
        {/* Calidad web por nivel de pertinencia */}
        <div style={{
          backgroundColor: 'var(--card)',
          border: '2px solid var(--border)',
          borderRadius: '16px',
          padding: '34px 26px'
        }}>
          <p style={{ 
            margin: '0 0 28px 0',
            textAlign: 'center',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--foreground)',
            letterSpacing: '0.08px'
          }}>
            Calidad web por pertinencia
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={webQualityOverview}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis 
                dataKey="metric" 
                stroke="var(--muted-foreground)"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="var(--muted-foreground)"
                style={{ fontSize: '12px' }}
                label={{ value: 'Puntuación (%)', angle: -90, position: 'insideLeft', style: { fill: 'grey', fontSize: '12px' } }}
              />
              <Tooltip content={<CustomBarTooltip />} />
              <Legend />
              <Bar dataKey="alta" name="Alta" fill={COLORS.alta} barSize={20} />
              <Bar dataKey="media" name="Media" fill={COLORS.media} barSize={20} />
              <Bar dataKey="baja" name="Baja" fill={COLORS.baja} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Principios FAIR - Radar chart */}
        <div style={{
          backgroundColor: 'var(--card)',
          border: '2px solid var(--border)',
          borderRadius: '16px',
          padding: '34px 26px'
        }}>
          <p style={{ 
            margin: '0 0 28px 0',
            textAlign: 'center',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--foreground)',
            letterSpacing: '0.08px'
          }}>
            Implementación de principios FAIR
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={fairPrinciplesRadar}>
              <PolarGrid stroke="var(--border)" />
              <PolarAngleAxis 
                dataKey="principle" 
                stroke="var(--muted-foreground)"
                style={{ fontSize: '12px' }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]}
                stroke="var(--muted-foreground)"
                style={{ fontSize: '10px' }}
              />
              <Radar name="Alta" dataKey="alta" stroke={COLORS.alta} fill={COLORS.alta} fillOpacity={0.6} />
              <Radar name="Media" dataKey="media" stroke={COLORS.media} fill={COLORS.media} fillOpacity={0.6} />
              <Radar name="Baja" dataKey="baja" stroke={COLORS.baja} fill={COLORS.baja} fillOpacity={0.6} />
              <Legend />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--popover)', 
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  color: 'var(--popover-foreground)'
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tendencia de calificaciones */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p style={{ 
          margin: 0,
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--foreground)'
        }}>
          Tendencias de evaluación
        </p>
        
        <div style={{
          backgroundColor: 'var(--card)',
          border: '2px solid var(--border)',
          borderRadius: '16px',
          padding: '34px 26px'
        }}>
          <p style={{ 
            margin: '0 0 28px 0',
            textAlign: 'center',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--foreground)',
            letterSpacing: '0.08px'
          }}>
            Número de calificaciones por sesión
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={qualificationsOverTime}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis 
                dataKey="session" 
                stroke="var(--muted-foreground)"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="var(--muted-foreground)"
                style={{ fontSize: '12px' }}
                label={{ value: 'Calificaciones', angle: -90, position: 'insideLeft', style: { fill: 'grey', fontSize: '12px' } }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--popover)', 
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  color: 'var(--popover-foreground)'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="calificaciones" 
                stroke={COLORS.primary} 
                strokeWidth={2}
                dot={{ fill: COLORS.primary, r: 4 }}
                activeDot={{ r: 6 }}
                name="Calificaciones"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Conclusiones clave */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p style={{ 
          margin: 0,
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--foreground)'
        }}>
          Conclusiones clave
        </p>
        
        <div style={{
          backgroundColor: 'var(--card)',
          border: '2px solid var(--border)',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{
              minWidth: '8px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: COLORS.alta,
              marginTop: '6px'
            }}></div>
            <p style={{
              margin: 0,
              fontSize: 'var(--text-sm)',
              color: 'var(--foreground)',
              lineHeight: '1.6'
            }}>
              <strong>Correlación positiva entre pertinencia y calidad:</strong> Los recursos con alta pertinencia 
              presentan puntuaciones perfectas (100%) en SEO y rendimiento web.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{
              minWidth: '8px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: COLORS.media,
              marginTop: '6px'
            }}></div>
            <p style={{
              margin: 0,
              fontSize: 'var(--text-sm)',
              color: 'var(--foreground)',
              lineHeight: '1.6'
            }}>
              <strong>Adopción heterogénea de tecnologías semánticas:</strong> Microdatos y conjuntos de datos 
              lideran la adopción (40%), mientras que microformatos tienen la menor adopción (9%).
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{
              minWidth: '8px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: COLORS.baja,
              marginTop: '6px'
            }}></div>
            <p style={{
              margin: 0,
              fontSize: 'var(--text-sm)',
              color: 'var(--foreground)',
              lineHeight: '1.6'
            }}>
              <strong>Brecha en accesibilidad:</strong> Existe una diferencia significativa en accesibilidad 
              entre recursos de alta pertinencia (46%) y baja pertinencia (16%), identificando un área de mejora crítica.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{
              minWidth: '8px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: COLORS.primary,
              marginTop: '6px'
            }}></div>
            <p style={{
              margin: 0,
              fontSize: 'var(--text-sm)',
              color: 'var(--foreground)',
              lineHeight: '1.6'
            }}>
              <strong>Implementación desigual de FAIR:</strong> Los principios de Findability y Reusability 
              están mejor implementados que Accessibility e Interoperability, especialmente en recursos de pertinencia media.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}