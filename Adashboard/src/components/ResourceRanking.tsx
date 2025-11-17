import { useState } from 'react';
import { Card } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ResourceRanking as ResourceRankingType } from '../types/dashboard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ResourceRankingProps {
  resources: ResourceRankingType[];
}

export function ResourceRanking({ resources }: ResourceRankingProps) {
  const [sortBy, setSortBy] = useState<'rating' | 'relevance' | 'sessionTime' | 'taskComplexity'>('rating');

  const sortedResources = [...resources].sort((a, b) => {
    if (sortBy === 'sessionTime' || sortBy === 'taskComplexity') {
      return a[sortBy] - b[sortBy]; // Ascending for time and complexity
    }
    return b[sortBy] - a[sortBy]; // Descending for rating and relevance
  });

  const chartData = sortedResources.slice(0, 8).map(resource => ({
    name: resource.name.length > 25 ? resource.name.substring(0, 25) + '...' : resource.name,
    'Calificación': resource.rating,
    'Pertinencia': resource.relevance * 5, // Scale to 0-5 for better visualization
  }));

  return (
    <Card className="p-6 border-border">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="text-foreground">Top de recursos mejor evaluados</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Ordenar por:</span>
            <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
              <SelectTrigger className="w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Calificación</SelectItem>
                <SelectItem value="relevance">Pertinencia</SelectItem>
                <SelectItem value="sessionTime">Tiempo de sesión</SelectItem>
                <SelectItem value="taskComplexity">Complejidad de tarea</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 120, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 5]} />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip />
              <Legend />
              <Bar dataKey="Calificación" fill="hsl(var(--chart-1))" />
              <Bar dataKey="Pertinencia" fill="hsl(var(--chart-2))" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sortedResources.slice(0, 4).map((resource, index) => (
            <div key={resource.id} className="p-4 border border-border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground text-sm">#{index + 1}</span>
                <span className="text-foreground">{resource.rating}/5</span>
              </div>
              <h4 className="text-foreground mb-3 line-clamp-2">{resource.name}</h4>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Pertinencia:</span>
                  <span className="text-foreground">{(resource.relevance * 100).toFixed(0)}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tiempo sesión:</span>
                  <span className="text-foreground">{resource.sessionTime.toFixed(1)} min</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Complejidad:</span>
                  <span className="text-foreground">{resource.taskComplexity.toFixed(1)}/5</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
