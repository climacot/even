export interface GeneralIndicator {
  label: string;
  value: string | number;
  icon: string;
}

export interface CorrelationData {
  variable: string;
  [key: string]: number | string;
}

export interface MatrixConfig {
  id: string;
  title: string;
  hypothesis?: string; // Optional for individual sessions
  variables: {
    rows: string[];
    columns: string[];
  };
  data: CorrelationData[];
  conclusion?: string; // Optional for individual sessions
  category: 'fair' | 'semantic' | 'quality' | 'session';
  sessionName?: string; // Optional session name for individual sessions
}

export interface ResourceRanking {
  id: string;
  name: string;
  rating: number;
  relevance: number;
  sessionTime: number;
  taskComplexity: number;
}

export interface DetailedCorrelationData {
  sessionId: string;
  variable1: number;
  variable2: number;
}
