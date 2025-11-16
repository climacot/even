export interface RecursoPertinenciaEvaluacionAutomatica {
  resource_id: string;
  pertinence_score: number;
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
}

export interface RecursoPertinenciaConteo {
  resource_id: string;
  pertinence_score: number;
  conteo: number;
}

export interface RecursoPertinenciaTiempoEncontrar {
  resource_id: string;
  pertinence_score: number;
  tiempo_hasta_encontrar: number;
}
