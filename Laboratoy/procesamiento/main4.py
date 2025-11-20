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

# 1. Filtrar: Seleccionar solo las webs con pertinencia > 3 (calificaciones 4 y 5)
df_high = df[df['calificacion_pertinencia'] >= 3].copy()

# Definir las columnas de los principios FAIR y el total
fair_components = ['f1_score', 'f2_score', 'f3_score', 'f4_score', 'i1_score', 'i2_score', 'i3_score']
fair_total = 'fair_score'

# 2. Estadísticas Descriptivas
print("Estadísticas (Media y Desviación) para Webs de Alta Pertinencia:")
print(df_high[fair_components + [fair_total]].describe())

# 3. Generar Visualizaciones
fig, axes = plt.subplots(2, 1, figsize=(12, 14))

# Gráfico 1: Boxplot de Componentes Individuales
# Permite ver qué principios específicos suelen estar presentes en las webs buenas
df_melted = df_high.melt(value_vars=fair_components, var_name='Principio FAIR', value_name='Score')
sns.boxplot(data=df_melted, x='Principio FAIR', y='Score', palette='viridis', ax=axes[0])
axes[0].set_title('Perfil de Principios FAIR en Webs de Alta Pertinencia (>3)')
axes[0].set_ylabel('Puntaje (0-100)')
axes[0].set_xlabel('Principio Individual')
axes[0].grid(axis='y', linestyle='--', alpha=0.6)

# Gráfico 2: Histograma del Puntaje FAIR Total
# Muestra si las webs buenas tienden a tener un puntaje FAIR global alto
sns.histplot(data=df_high, x=fair_total, bins=15, kde=True, color='teal', ax=axes[1])
axes[1].set_title('Distribución del FAIR Score Total en Webs de Alta Pertinencia')
axes[1].set_xlabel('FAIR Score Global (0-100)')
axes[1].set_ylabel('Frecuencia (Cantidad de Webs)')
axes[1].grid(axis='y', linestyle='--', alpha=0.6)

plt.tight_layout()
plt.show()