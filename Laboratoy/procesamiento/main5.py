import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import statsmodels.api as sm
from sqlalchemy import create_engine

# --- CONFIGURACIÓN DE LA CONEXIÓN ---
# Reemplaza con tus credenciales de Supabase
DB_USER = "postgres.hgsxnscedselcjiucliu"  # Por defecto suele ser 'postgres'
DB_PASSWORD = "QofEJ6JxWNGuairn"
DB_HOST = "aws-1-us-east-2.pooler.supabase.com"
DB_PORT = "6543"
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
  AND TSR.PERTINENCE_SCORE >= 1;
"""

# --- EJECUCIÓN Y CARGA EN DATAFRAME ---
print("Conectando a Supabase y descargando datos...")
df = pd.read_sql(query, engine)

print("Datos cargados exitosamente.")
print(f"Se obtuvieron {len(df)} filas.")

# Variables a analizar
features = ['seo_score', 'accesibility_score', 'performance_score']
target = 'calificacion_pertinencia'
all_vars = features + [target]

# Limpieza básica: asegurar que sean números
for col in all_vars:
    df[col] = pd.to_numeric(df[col], errors='coerce')
df = df.dropna(subset=all_vars)

# --- GRÁFICO 1: Mapa de Calor de Correlación ---
plt.figure(figsize=(10, 8))
sns.heatmap(df[all_vars].corr(), annot=True, cmap='coolwarm', vmin=-1, vmax=1)
plt.title('Mapa de Calor: Correlación entre variables')
# Guardar y luego mostrar
plt.savefig('1_analisis_correlacion.png') 
print("Gráfico 1 guardado: 1_analisis_correlacion.png")
plt.show() 

# --- GRÁFICO 2: Pairplot (Relación uno a uno) ---
# Este gráfico muestra cómo se comporta cada variable técnica frente a la calificación
sns.pairplot(df[all_vars], diag_kind='kde')
plt.savefig('2_analisis_relaciones.png')
print("Gráfico 2 guardado: 2_analisis_relaciones.png")
plt.show()

# --- GRÁFICO 3: Distribuciones (Histogramas) ---
# Para ver cómo se distribuyen tus 115 datos en cada métrica
fig, axes = plt.subplots(1, 3, figsize=(18, 5))

sns.histplot(df['seo_score'], ax=axes[0], kde=True, color='blue')
axes[0].set_title('Distribución SEO Score')

sns.histplot(df['accesibility_score'], ax=axes[1], kde=True, color='green')
axes[1].set_title('Distribución Accessibility Score')

sns.histplot(df['performance_score'], ax=axes[2], kde=True, color='red')
axes[2].set_title('Distribución Performance Score')

plt.tight_layout()
plt.savefig('3_analisis_distribuciones.png')
print("Gráfico 3 guardado: 3_analisis_distribuciones.png")
plt.show()

# --- ANÁLISIS ESTADÍSTICO (Regresión) ---
X = df[features]
y = df[target]
X = sm.add_constant(X) # Importante para el modelo

model = sm.OLS(y, X).fit()
print("\n--- RESULTADOS DEL ANÁLISIS DE REGRESIÓN ---")
print(model.summary())