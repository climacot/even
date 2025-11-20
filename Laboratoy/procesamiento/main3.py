import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
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
	TSR.PERTINENCE_SCORE IS NOT NULL;
"""

# --- EJECUCIÓN Y CARGA EN DATAFRAME ---
print("Conectando a Supabase y descargando datos...")
df = pd.read_sql(query, engine)

print("Datos cargados exitosamente.")
print(f"Se obtuvieron {len(df)} filas.")

# Definir las columnas de los principios FAIR y la variable objetivo
fair_columns = ['fair_score', 'f1_score', 'f2_score', 'f3_score', 'f4_score', 
                'i1_score', 'i2_score', 'i3_score']
target_column = 'calificacion_pertinencia'

# Crear una figura con 2 subgráficas (una encima de la otra) para que se vean ambas
fig, axes = plt.subplots(2, 1, figsize=(12, 16))

# --- GRÁFICA 1: Mapa de Calor de Correlación ---
# Calculamos la correlación de Spearman (ideal para rankings/calificaciones)
correlation_matrix = df[fair_columns + [target_column]].corr(method='spearman')

# Dibujamos el heatmap en el primer eje (axes[0])
sns.heatmap(correlation_matrix[[target_column]].sort_values(by=target_column, ascending=False),
            annot=True, cmap='coolwarm', vmin=-1, vmax=1, ax=axes[0])
axes[0].set_title('Correlación de Principios FAIR con Calificación de Pertinencia')

# --- GRÁFICA 2: Diagramas de Caja (Boxplots) ---
# Preparamos los datos para poder graficarlos en conjunto
df_melted = df.melt(id_vars=[target_column], value_vars=fair_columns, 
                    var_name='Principio FAIR', value_name='Score')

# Dibujamos los boxplots en el segundo eje (axes[1])
sns.boxplot(x='Principio FAIR', y='Score', hue=target_column, data=df_melted, palette='viridis', ax=axes[1])
axes[1].set_title('Distribución de Scores FAIR según Calificación de Pertinencia')
axes[1].set_ylabel('Puntaje Obtenido')
axes[1].legend(title='Pertinencia', loc='upper right')
axes[1].grid(axis='y', linestyle='--', alpha=0.5)

# Ajustar el diseño para que no se solapen los textos
plt.tight_layout()

# Mostrar la figura completa
plt.show()