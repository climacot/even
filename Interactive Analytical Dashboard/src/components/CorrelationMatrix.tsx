import { useState, useMemo } from 'react';
import { MatrixConfig } from '../types/dashboard';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from './ui/sheet';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CorrelationMatrixProps {
  matrix: MatrixConfig;
}

export function CorrelationMatrix({ matrix }: CorrelationMatrixProps) {
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number; value: number; rowName: string; colName: string } | null>(null);
  const [isHypothesisOpen, setIsHypothesisOpen] = useState(false);
  const [isConclusionOpen, setIsConclusionOpen] = useState(false);

  const getCorrelationColor = (value: number) => {
    if (value >= 0.7) return { backgroundColor: '#15803d', color: '#fff' };
    if (value >= 0.4) return { backgroundColor: '#4ade80', color: '#1f2937' };
    if (value <= -0.7) return { backgroundColor: '#b91c1c', color: '#fff' };
    if (value <= -0.4) return { backgroundColor: '#f87171', color: '#1f2937' };
    if (value === 1) return { backgroundColor: '#d1d5db', color: '#1f2937' };
    return { backgroundColor: '#f3f4f6', color: '#1f2937' };
  };

  const getCorrelationHoverColor = (value: number): string => {
    if (value >= 0.7) return 'hover:opacity-90';
    if (value >= 0.4) return 'hover:opacity-90';
    if (value <= -0.7) return 'hover:opacity-90';
    if (value <= -0.4) return 'hover:opacity-90';
    if (value === 1) return '';
    return 'hover:opacity-90';
  };

  const getCorrelationStrength = (value: number): string => {
    const abs = Math.abs(value);
    if (abs >= 0.7) return 'Fuerte';
    if (abs >= 0.4) return 'Moderada';
    if (abs >= 0.2) return 'Débil';
    return 'Nula';
  };

  const getCorrelationLabel = (value: number): string => {
    const strength = getCorrelationStrength(value);
    const direction = value > 0 ? 'Positiva' : 'Negativa';
    return `Correlación ${direction} ${strength}`;
  };

  const getCorrelationLegend = (value: number): string => {
    const abs = Math.abs(value);
    if (abs >= 0.7) {
      return value > 0 ? 'Positiva fuerte (≥0.7)' : 'Negativa fuerte (≤-0.7)';
    }
    if (abs >= 0.4) {
      return value > 0 ? 'Positiva moderada (0.4-0.7)' : 'Negativa moderada (-0.4 a -0.7)';
    }
    return 'Débil o nula (<0.4)';
  };

  const handleCellClick = (rowIndex: number, colIndex: number, value: number, rowName: string, colName: string) => {
    if (typeof value === 'number' && value !== 1) {
      setSelectedCell({ row: rowIndex, col: colIndex, value, rowName, colName });
    }
  };

  // Generate mock data for the selected correlation
  const generateMockData = (correlationValue: number) => {
    // Generate data that reflects the correlation coefficient
    const data = [];
    const baseNoise = 0.3;
    
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * 5;
      // Create correlation by adding noise to a linear relationship
      const y = (x * correlationValue) + (Math.random() - 0.5) * baseNoise * 5 + 2.5;
      data.push({
        sessionId: `S${String(i + 1).padStart(3, '0')}`,
        variable1: Number(x.toFixed(2)),
        variable2: Number(Math.max(0, Math.min(5, y)).toFixed(2)),
        x: Number(x.toFixed(2)),
        y: Number(Math.max(0, Math.min(5, y)).toFixed(2))
      });
    }
    return data;
  };

  return (
    <>
      <Card className="p-6 border-border">
        <div className="space-y-4">
          <div>
            <h3 className="text-foreground">{matrix.title}</h3>
          </div>

          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-border p-3 bg-muted min-w-[180px] text-left">
                      <span className="text-sm"></span>
                    </th>
                    {matrix.variables.columns.map((col, idx) => (
                      <th key={idx} className="border border-border p-3 bg-muted min-w-[100px]">
                        <span className="text-sm">{col}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {matrix.data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      <td className="border border-border p-3 bg-muted">
                        <span className="text-sm">{row.variable}</span>
                      </td>
                      {matrix.variables.columns.map((col, colIndex) => {
                        const value = row[col] as number;
                        const colorStyle = getCorrelationColor(value);
                        return (
                          <TooltipProvider key={colIndex}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <td 
                                  className={`border border-border p-3 text-center cursor-pointer transition-opacity ${getCorrelationHoverColor(value)}`}
                                  style={colorStyle}
                                  onClick={() => handleCellClick(rowIndex, colIndex, value, row.variable as string, col)}
                                >
                                  <span className="text-sm" style={{ color: colorStyle.color }}>{typeof value === 'number' ? value.toFixed(2) : value}</span>
                                </td>
                              </TooltipTrigger>
                              <TooltipContent>
                                <div className="space-y-2">
                                  <p className="text-popover-foreground">r = {typeof value === 'number' ? value.toFixed(2) : value}</p>
                                  <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded" style={{ backgroundColor: colorStyle.backgroundColor }}></div>
                                    <span className="text-sm text-popover-foreground">{getCorrelationLegend(value as number)}</span>
                                  </div>
                                  <p className="text-xs text-popover-foreground/70">Click para ver datos</p>
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Only show hypothesis and conclusion if they exist */}
          {(matrix.hypothesis || matrix.conclusion) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {matrix.hypothesis && (
                <Collapsible open={isHypothesisOpen} onOpenChange={setIsHypothesisOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-muted/50 hover:bg-muted border border-border rounded-lg transition-colors">
                    <h4 className="text-foreground">Hipótesis</h4>
                    {isHypothesisOpen ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-3 px-3">
                    <p className="text-muted-foreground text-sm">{matrix.hypothesis}</p>
                  </CollapsibleContent>
                </Collapsible>
              )}

              {matrix.conclusion && (
                <Collapsible open={isConclusionOpen} onOpenChange={setIsConclusionOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-accent/8 hover:bg-accent/12 border border-accent/30 rounded-lg transition-colors">
                    <h4 className="text-foreground">Conclusión</h4>
                    {isConclusionOpen ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-3 px-3">
                    <p className="text-muted-foreground text-sm">{matrix.conclusion}</p>
                  </CollapsibleContent>
                </Collapsible>
              )}
            </div>
          )}
        </div>
      </Card>

      <Sheet open={!!selectedCell} onOpenChange={() => setSelectedCell(null)}>
        <SheetContent className="w-full sm:max-w-3xl overflow-y-auto px-8">
          {selectedCell && (() => {
            const mockData = generateMockData(selectedCell.value);
            return (
              <>
                <SheetHeader className="px-[0px] py-[16px] pt-[16px] pr-[0px] pb-[0px] pl-[0px]">
                  <SheetTitle>Datos de Correlación</SheetTitle>
                  <SheetDescription>
                    Correlación entre <strong>{selectedCell.rowName}</strong> y <strong>{selectedCell.colName}</strong>
                  </SheetDescription>
                </SheetHeader>
                
                <div className="mt-6 space-y-6">
                  <div className="flex items-center justify-between bg-[rgb(243,244,246)] rounded-lg p-[16px]">
                    <div>
                      <p className="text-muted-foreground text-sm">Coeficiente de Pearson</p>
                      <p className="text-foreground">r = {selectedCell.value.toFixed(3)}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Fuerza</p>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded" style={{ backgroundColor: getCorrelationColor(selectedCell.value).backgroundColor }}></div>
                        <p className="text-foreground">{getCorrelationStrength(selectedCell.value)}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Dirección</p>
                      <p className="text-foreground">{selectedCell.value > 0 ? 'Positiva' : 'Negativa'}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-foreground mb-3">Gráfica de dispersión</h4>
                    <div className="border border-border rounded-lg p-4 bg-card">
                      <ResponsiveContainer width="100%" height={300}>
                        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                          <XAxis 
                            type="number" 
                            dataKey="x" 
                            domain={[0, 5]}
                            name={selectedCell.rowName}
                            label={{ value: selectedCell.rowName, position: 'insideBottom', offset: -10 }}
                            stroke="hsl(var(--muted-foreground))"
                          />
                          <YAxis 
                            type="number" 
                            dataKey="y" 
                            domain={[0, 5]}
                            name={selectedCell.colName}
                            label={{ value: selectedCell.colName, angle: -90, position: 'insideLeft' }}
                            stroke="hsl(var(--muted-foreground))"
                          />
                          <RechartsTooltip 
                            cursor={{ strokeDasharray: '3 3' }}
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                return (
                                  <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
                                    <p className="text-popover-foreground text-sm">
                                      <strong>{selectedCell.rowName}:</strong> {payload[0].value}
                                    </p>
                                    <p className="text-popover-foreground text-sm">
                                      <strong>{selectedCell.colName}:</strong> {payload[1].value}
                                    </p>
                                  </div>
                                );
                              }
                              return null;
                            }}
                          />
                          <Scatter 
                            data={mockData} 
                            fill="hsl(var(--chart-1))"
                            opacity={0.7}
                          />
                        </ScatterChart>
                      </ResponsiveContainer>
                      <p className="text-muted-foreground text-xs text-center mt-2">
                        La línea de tendencia muestra la relación {selectedCell.value > 0 ? 'positiva' : 'negativa'} entre las variables
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-foreground mb-3">Datos observados (muestra de 30 sesiones)</h4>
                    <div className="border border-border rounded-lg overflow-hidden">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Sesión</TableHead>
                            <TableHead>{selectedCell.rowName}</TableHead>
                            <TableHead>{selectedCell.colName}</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {mockData.map((data, idx) => (
                            <TableRow key={idx}>
                              <TableCell>{data.sessionId}</TableCell>
                              <TableCell>{data.variable1}</TableCell>
                              <TableCell>{data.variable2}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>
              </>
            );
          })()}
        </SheetContent>
      </Sheet>
    </>
  );
}
