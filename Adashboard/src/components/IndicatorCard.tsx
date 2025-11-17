import { Users, Database, Clock } from 'lucide-react';
import { Card } from './ui/card';

interface IndicatorCardProps {
  label: string;
  value: string | number;
  icon: string;
}

export function IndicatorCard({ label, value, icon }: IndicatorCardProps) {
  const IconComponent = icon === 'users' ? Users : icon === 'database' ? Database : Clock;
  
  return (
    <Card className="p-6 border-border">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <IconComponent className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <p className="text-muted-foreground mb-1">{label}</p>
          <h2 className="text-foreground">{value}</h2>
        </div>
      </div>
    </Card>
  );
}
