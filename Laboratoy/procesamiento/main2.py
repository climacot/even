import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
from sqlalchemy import create_engine

# --- CONFIGURACIÓN DE LA CONEXIÓN ---
# Reemplaza con tus credenciales de Supabase
DB_USER = "postgres.hgsxnscedselcjiucliu"  # Por defecto suele ser 'postgres'
DB_PASSWORD = "QofEJ6JxWNGuairn"
DB_HOST = "aws-1-us-east-2.pooler.supabase.com"
DB_PORT = "5432"
DB_NAME = "postgres"

# Crear la cadena de conexión (URI)
connection_str = f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

# Crear el motor de conexión
engine = create_engine(connection_str)

# --- TU CONSULTA SQL ---
query = """
SELECT
	TS.ID AS SESION_ID,
	TS.CAT_TASK_ID AS TAREA_ID,
	U.RAW_USER_META_DATA AS NOMBRE_USUARIO,
	TS.FEELING_SCORE AS SENTIMIENTO_ENCONTRABILIDAD,
	TS.COMPLEXITY_SCORE AS COMPLEJIDAD_PERCIBIDAD,
	TS.START_AT AS INICIO_TAREA,
	TS.END_AT AS FINAL_TAREA,
	TSR.PERTINENCE_SCORE AS CALIFICACION_PERTINENCIA,
	TSR.NAVIGATED_AT AS HORA_NAVEGACION,
	TSR.NAVIGATED_AT - TS.START_AT AS TIEMPO_HASTA_ENCONTRAR,
	ROW_NUMBER() OVER (
		PARTITION BY
			TS.ID
		ORDER BY
			TSR.NAVIGATED_AT
	) - 1 AS NAVEGACIONES_HASTA_ENCONTRAR,
	R.URL,
	AE.NUM_MICRODATA,
	AE.NUM_MICROFORMATS,
	AE.NUM_RDFA,
	AE.NUM_JSONLD,
	AE.FAIR_SCORE,
	AE.F1_SCORE,
	AE.F2_SCORE,
	AE.F3_SCORE,
	AE.F4_SCORE,
	AE.I1_SCORE,
	AE.I2_SCORE,
	AE.I3_SCORE,
	AE.SEO_SCORE,
	AE.ACCESIBILITY_SCORE,
	AE.PERFORMANCE_SCORE
FROM
	AUTH.USERS U
	RIGHT JOIN PUBLIC.SEARCH_SESSION SS ON U.ID = SS.USER_ID
	RIGHT JOIN PUBLIC.TASK_SESSION TS ON TS.SEARCH_SESSION_ID = SS.ID
	INNER JOIN PUBLIC.TASK_SESSION_RESOURCE TSR ON TS.ID = TSR.TASK_SESSION_ID
	LEFT JOIN PUBLIC.RESOURCE R ON TSR.RESOURCE_ID = R.ID
	LEFT JOIN PUBLIC.AUTOMATIC_EVALUATION AE ON R.AUTOMATIC_EVALUATION_ID = AE.ID
WHERE
	TSR.PERTINENCE_SCORE IS NOT NULL
	AND TS.CAT_TASK_ID = '5f23f6d9-5fc2-4edf-a732-13a144fbcc0e';
"""

# --- EJECUCIÓN Y CARGA EN DATAFRAME ---
print("Conectando a Supabase y descargando datos...")
df = pd.read_sql(query, engine)

print("Datos cargados exitosamente.")
print(f"Se obtuvieron {len(df)} filas.")

# Mostrar las primeras filas para verificar
# print(df.head())

# NOTA: Ahora 'df' contiene los datos exactos que tenías en el CSV, 
# puedes usar este 'df' en tus scripts de gráficas anteriores.

# Cargar el archivo CSV
# df = pd.read_csv('dataset.csv')

# Definir los dos grupos a contrastar
# Grupo 1: Webs con más de un JSON-LD (num_jsonld > 1)
group_high = df[df['num_jsonld'] > 1]['calificacion_pertinencia']

# Grupo 2: Webs con cero JSON-LD (num_jsonld == 0)
group_zero = df[df['num_jsonld'] == 0]['calificacion_pertinencia']

# Calcular las frecuencias de cada calificación (del 1 al 5) para ambos grupos
all_scores = np.arange(1, 6)
counts_high = group_high.value_counts().reindex(all_scores, fill_value=0)
counts_zero = group_zero.value_counts().reindex(all_scores, fill_value=0)

# Configurar la gráfica de barras agrupadas
x = np.arange(len(all_scores))
width = 0.35  # Ancho de las barras

fig, ax = plt.subplots(figsize=(10, 6))

# Dibujar las barras para cada grupo
rects1 = ax.bar(x - width/2, counts_high, width, label='Más de 1 JSON-LD', color='skyblue')
rects2 = ax.bar(x + width/2, counts_zero, width, label='0 JSON-LD', color='salmon')

# Añadir etiquetas, título y leyenda
ax.set_ylabel('Frecuencia')
ax.set_xlabel('Calificación de Pertinencia')
ax.set_title('Contraste: Webs con >1 JSON-LD vs 0 JSON-LD')
ax.set_xticks(x)
ax.set_xticklabels(all_scores)
ax.legend()

# Cuadrícula para facilitar la lectura
ax.grid(axis='y', linestyle='--', alpha=0.7)

plt.tight_layout()
plt.show()