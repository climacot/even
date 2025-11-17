import { GeneralIndicator, MatrixConfig, ResourceRanking, DetailedCorrelationData } from '../types/dashboard';

export const generalIndicators: GeneralIndicator[] = [
  { label: 'Cantidad de sesiones', value: 10, icon: 'users' },
  { label: 'Total de recursos evaluados', value: 142, icon: 'database' },
  { label: 'Tiempo promedio de sesión', value: '12.4 min', icon: 'clock' },
];

// Matrices para "Tarea"
export const taskMatrices: MatrixConfig[] = [
  {
    id: 'task-correlations',
    title: 'Correlaciones de Pearson',
    category: 'session',
    variables: {
      rows: ['Complejidad Percibida', 'Sentimiento de Encontrabilidad'],
      columns: ['Complejidad Percibida', 'Sentimiento de Encontrabilidad', 'Tiempo Tarea', 'Tiempo hasta Encontrar', 'Clics', 'Recursos Leídos', 'Tiempo de Lectura']
    },
    data: [
      { 
        variable: 'Complejidad Percibida',
        'Complejidad Percibida': 1.00,
        'Sentimiento de Encontrabilidad': -0.71,
        'Tiempo Tarea': 0.58,
        'Tiempo hasta Encontrar': 0.69,
        Clics: 0,
        'Recursos Leídos': -0.24,
        'Tiempo de Lectura': -0.18
      },
      { 
        variable: 'Sentimiento de Encontrabilidad',
        'Complejidad Percibida': -0.71,
        'Sentimiento de Encontrabilidad': 1.00,
        'Tiempo Tarea': -0.45,
        'Tiempo hasta Encontrar': -0.58,
        Clics: -0.53,
        'Recursos Leídos': 0.19,
        'Tiempo de Lectura': 0.22
      }
    ]
  }
];

// Matrices para "Promedio sesiones"
export const averageMatrices: MatrixConfig[] = [
  {
    id: 'avg-semantic-relevance',
    title: 'Pertinencia ↔ Complejidad percibida ↔ Estructuración semántica',
    hypothesis: 'El uso de metadatos semánticos y tecnologías asociadas mejora la pertinencia percibida y reduce la complejidad de la tarea de búsqueda.',
    category: 'semantic',
    variables: {
      rows: ['Prom. pertinencia', 'Complejidad percibida'],
      columns: ['Microdatos', 'Microformatos', 'RDFa', 'JSONLD', 'Vocabularios', 'ConjDatos', 'Ontologías']
    },
    data: [
      { 
        variable: 'Prom. pertinencia', 
        Microdatos: 0.43, 
        Microformatos: 0.38, 
        RDFa: 0.41, 
        JSONLD: 0.56, 
        Vocabularios: 0.62, 
        ConjDatos: 0.59, 
        Ontologías: 0.51 
      },
      { 
        variable: 'Complejidad percibida', 
        Microdatos: -0.35, 
        Microformatos: -0.29, 
        RDFa: -0.33, 
        JSONLD: -0.47, 
        Vocabularios: -0.52, 
        ConjDatos: -0.48, 
        Ontologías: -0.42 
      }
    ],
    conclusion: 'JSON-LD y Vocabularios muestran las correlaciones más fuertes con la pertinencia y reducción de complejidad, indicando que la estructuración semántica moderna facilita significativamente la encontrabilidad de información relevante.'
  },
  {
    id: 'avg-fair-relevance',
    title: 'Pertinencia ↔ Complejidad percibida ↔ FAIR',
    hypothesis: 'La adopción de los principios FAIR se correlaciona positivamente con la pertinencia percibida y negativamente con la complejidad de la tarea.',
    category: 'fair',
    variables: {
      rows: ['Prom. pertinencia', 'Complejidad percibida'],
      columns: ['AdopciónFAIR', 'F1', 'F2', 'F3', 'F4', 'I1', 'I2', 'I3']
    },
    data: [
      { 
        variable: 'Prom. pertinencia', 
        AdopciónFAIR: 0.72, 
        F1: 0.68, 
        F2: 0.54, 
        F3: 0.61, 
        F4: 0.58, 
        I1: 0.49, 
        I2: 0.52, 
        I3: 0.47 
      },
      { 
        variable: 'Complejidad percibida', 
        AdopciónFAIR: -0.56, 
        F1: -0.53, 
        F2: -0.48, 
        F3: -0.51, 
        F4: -0.44, 
        I1: -0.39, 
        I2: -0.42, 
        I3: -0.38 
      }
    ],
    conclusion: 'Se observa una correlación positiva fuerte entre la adopción general de principios FAIR y la pertinencia percibida, siendo F1 (Findable) el componente individual más influyente. La adopción FAIR reduce sistemáticamente la complejidad percibida.'
  },
  {
    id: 'avg-quality-relevance',
    title: 'Pertinencia ↔ Complejidad percibida ↔ Calidad web',
    hypothesis: 'Los indicadores técnicos de calidad web se correlacionan positivamente con la pertinencia percibida y negativamente con la complejidad de la tarea.',
    category: 'quality',
    variables: {
      rows: ['Prom. pertinencia', 'Complejidad percibida'],
      columns: ['SEO', 'Accesibilidad', 'Rendimiento']
    },
    data: [
      { 
        variable: 'Prom. pertinencia', 
        SEO: 0.67, 
        Accesibilidad: 0.52, 
        Rendimiento: 0.44 
      },
      { 
        variable: 'Complejidad percibida', 
        SEO: -0.54, 
        Accesibilidad: -0.43, 
        Rendimiento: -0.36 
      }
    ],
    conclusion: 'El SEO presenta la correlación más fuerte, validando que las buenas prácticas de optimización para motores de búsqueda alinean los recursos con las necesidades de información del usuario y reducen la complejidad de la búsqueda.'
  },
  {
    id: 'avg-session-metrics',
    title: 'Pertinencia ↔ Complejidad percibida ↔ Sentimiento de encontrabilidad ↔ Métricas generales',
    hypothesis: 'A mayor pertinencia, aumenta la percepción de encontrabilidad y disminuye la complejidad percibida de la tarea.',
    category: 'session',
    variables: {
      rows: ['Prom. pertinencia', 'Complejidad percibida'],
      columns: ['SentEncontrabilidad', 'TiempoTarea', 'ÉxitoTarea', 'TiempoHastaEncontrar', 'ClicsHastaEncontrar', 'RecursosLeídos', 'TiempoDeLectura']
    },
    data: [
      { 
        variable: 'Prom. pertinencia',
        SentEncontrabilidad: 0.78,
        TiempoTarea: -0.31,
        ÉxitoTarea: 0.69,
        TiempoHastaEncontrar: -0.42,
        ClicsHastaEncontrar: -0.38,
        RecursosLeídos: 0.28,
        TiempoDeLectura: 0.33
      },
      { 
        variable: 'Complejidad percibida',
        SentEncontrabilidad: -0.71,
        TiempoTarea: 0.58,
        ÉxitoTarea: -0.62,
        TiempoHastaEncontrar: 0.69,
        ClicsHastaEncontrar: 0.73,
        RecursosLeídos: -0.24,
        TiempoDeLectura: -0.18
      }
    ],
    conclusion: 'Se confirma la hipótesis: la pertinencia se correlaciona fuertemente con el sentimiento de encontrabilidad y negativamente con la complejidad percibida. La complejidad percibida predice fuertemente el número de clics necesarios y el tiempo hasta encontrar recursos.'
  }
];

// Matrices para "Sesión individual"
export const individualSessions: MatrixConfig[][] = [
  // Sesión 1: Cristian Narváez
  [
    {
      id: 'ind-s1-semantic',
      title: 'Pertinencia ↔ Estructuración semántica',
      category: 'semantic',
      sessionName: 'Cristian Narváez',
      variables: {
        rows: ['Pertinencia'],
        columns: ['Microdatos', 'Microformatos', 'RDFa', 'JSONLD', 'Vocabularios', 'ConjDatos', 'Ontologías']
      },
      data: [
        { 
          variable: 'Pertinencia', 
          Microdatos: 0.43, 
          Microformatos: 0.38, 
          RDFa: 0.41, 
          JSONLD: 0.56, 
          Vocabularios: 0.62, 
          ConjDatos: 0.59, 
          Ontologías: 0.51 
        }
      ]
    },
    {
      id: 'ind-s1-fair',
      title: 'Pertinencia ↔ FAIR',
      category: 'fair',
      sessionName: 'Cristian Narváez',
      variables: {
        rows: ['Pertinencia'],
        columns: ['AdopciónFAIR', 'F1', 'F2', 'F3', 'F4', 'I1', 'I2', 'I3']
      },
      data: [
        { 
          variable: 'Pertinencia', 
          AdopciónFAIR: 0.72, 
          F1: 0.68, 
          F2: 0.54, 
          F3: 0.61, 
          F4: 0.58, 
          I1: 0.49, 
          I2: 0.52, 
          I3: 0.47 
        }
      ]
    },
    {
      id: 'ind-s1-quality',
      title: 'Pertinencia ↔ Calidad web',
      category: 'quality',
      sessionName: 'Cristian Narváez',
      variables: {
        rows: ['Pertinencia'],
        columns: ['SEO', 'Accesibilidad', 'Rendimiento']
      },
      data: [
        { 
          variable: 'Pertinencia', 
          SEO: 0.67, 
          Accesibilidad: 0.52, 
          Rendimiento: 0.44 
        }
      ]
    }
  ],
  // Sesión 2: Clímaco Rodríguez
  [
    {
      id: 'ind-s2-semantic',
      title: 'Pertinencia ↔ Estructuración semántica',
      category: 'semantic',
      sessionName: 'Clímaco Rodríguez',
      variables: {
        rows: ['Pertinencia'],
        columns: ['Microdatos', 'Microformatos', 'RDFa', 'JSONLD', 'Vocabularios', 'ConjDatos', 'Ontologías']
      },
      data: [
        { 
          variable: 'Pertinencia', 
          Microdatos: 0.41, 
          Microformatos: 0.35, 
          RDFa: 0.43, 
          JSONLD: 0.53, 
          Vocabularios: 0.59, 
          ConjDatos: 0.57, 
          Ontologías: 0.49 
        }
      ]
    },
    {
      id: 'ind-s2-fair',
      title: 'Pertinencia ↔ FAIR',
      category: 'fair',
      sessionName: 'Clímaco Rodríguez',
      variables: {
        rows: ['Pertinencia'],
        columns: ['AdopciónFAIR', 'F1', 'F2', 'F3', 'F4', 'I1', 'I2', 'I3']
      },
      data: [
        { 
          variable: 'Pertinencia', 
          AdopciónFAIR: 0.70, 
          F1: 0.66, 
          F2: 0.52, 
          F3: 0.59, 
          F4: 0.56, 
          I1: 0.47, 
          I2: 0.50, 
          I3: 0.45 
        }
      ]
    },
    {
      id: 'ind-s2-quality',
      title: 'Pertinencia ↔ Calidad web',
      category: 'quality',
      sessionName: 'Clímaco Rodríguez',
      variables: {
        rows: ['Pertinencia'],
        columns: ['SEO', 'Accesibilidad', 'Rendimiento']
      },
      data: [
        { 
          variable: 'Pertinencia', 
          SEO: 0.65, 
          Accesibilidad: 0.50, 
          Rendimiento: 0.42 
        }
      ]
    }
  ],
  // Sesión 3: Pepito Perez
  [
    {
      id: 'ind-s3-semantic',
      title: 'Pertinencia ↔ Estructuración semántica',
      category: 'semantic',
      sessionName: 'Pepito Perez',
      variables: {
        rows: ['Pertinencia'],
        columns: ['Microdatos', 'Microformatos', 'RDFa', 'JSONLD', 'Vocabularios', 'ConjDatos', 'Ontologías']
      },
      data: [
        { 
          variable: 'Pertinencia', 
          Microdatos: 0.44, 
          Microformatos: 0.40, 
          RDFa: 0.40, 
          JSONLD: 0.58, 
          Vocabularios: 0.64, 
          ConjDatos: 0.60, 
          Ontologías: 0.52 
        }
      ]
    },
    {
      id: 'ind-s3-fair',
      title: 'Pertinencia ↔ FAIR',
      category: 'fair',
      sessionName: 'Pepito Perez',
      variables: {
        rows: ['Pertinencia'],
        columns: ['AdopciónFAIR', 'F1', 'F2', 'F3', 'F4', 'I1', 'I2', 'I3']
      },
      data: [
        { 
          variable: 'Pertinencia', 
          AdopciónFAIR: 0.73, 
          F1: 0.69, 
          F2: 0.55, 
          F3: 0.62, 
          F4: 0.59, 
          I1: 0.50, 
          I2: 0.53, 
          I3: 0.48 
        }
      ]
    },
    {
      id: 'ind-s3-quality',
      title: 'Pertinencia ↔ Calidad web',
      category: 'quality',
      sessionName: 'Pepito Perez',
      variables: {
        rows: ['Pertinencia'],
        columns: ['SEO', 'Accesibilidad', 'Rendimiento']
      },
      data: [
        { 
          variable: 'Pertinencia', 
          SEO: 0.68, 
          Accesibilidad: 0.53, 
          Rendimiento: 0.45 
        }
      ]
    }
  ]
];

export const resourceRankings: ResourceRanking[] = [
  { id: 'r1', name: 'Repositorio Institucional UNAM', rating: 4.7, relevance: 0.89, sessionTime: 8.2, taskComplexity: 2.1 },
  { id: 'r2', name: 'SciELO México', rating: 4.6, relevance: 0.86, sessionTime: 9.1, taskComplexity: 2.3 },
  { id: 'r3', name: 'Redalyc', rating: 4.5, relevance: 0.84, sessionTime: 10.2, taskComplexity: 2.5 },
  { id: 'r4', name: 'Biblioteca Digital del ILCE', rating: 4.3, relevance: 0.79, sessionTime: 11.5, taskComplexity: 2.8 },
  { id: 'r5', name: 'Repositorio CONACYT', rating: 4.2, relevance: 0.77, sessionTime: 10.8, taskComplexity: 2.6 },
  { id: 'r6', name: 'Portal de Datos Abiertos', rating: 4.1, relevance: 0.75, sessionTime: 12.1, taskComplexity: 3.1 },
  { id: 'r7', name: 'Red de Repositorios Latinoamericanos', rating: 3.9, relevance: 0.71, sessionTime: 13.2, taskComplexity: 3.3 },
  { id: 'r8', name: 'Biblioteca Virtual de Salud', rating: 3.8, relevance: 0.68, sessionTime: 14.5, taskComplexity: 3.5 }
];

// Datos detallados para cada correlación (muestra para modal)
export const detailedCorrelationData: Record<string, DetailedCorrelationData[]> = {
  'default': Array.from({ length: 30 }, (_, i) => ({
    sessionId: `S${String(i + 1).padStart(3, '0')}`,
    variable1: Math.random() * 5,
    variable2: Math.random() * 5
  }))
};