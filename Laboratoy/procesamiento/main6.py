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

# Definir variables
x_col = 'num_jsonld'
y_col = 'calificacion_pertinencia'

# Limpieza: Asegurar numéricos y quitar nulos
df[x_col] = pd.to_numeric(df[x_col], errors='coerce')
df[y_col] = pd.to_numeric(df[y_col], errors='coerce')
df_clean = df.dropna(subset=[x_col, y_col])

# --- ANÁLISIS ESTADÍSTICO ---

# A. Correlación (Spearman es mejor aquí porque los datos pueden no ser lineales perfectos)
corr = df_clean[x_col].corr(df_clean[y_col], method='spearman')
print(f"\n1. Coeficiente de Correlación (Spearman): {corr:.4f}")
print("   (Cercano a 1: Relación positiva fuerte. Cercano a 0: No hay relación).")

# B. Regresión Lineal (Para ver la tendencia y significancia)
X = df_clean[[x_col]]
y = df_clean[y_col]
X = sm.add_constant(X) # Agregar constante

model = sm.OLS(y, X).fit()
print("\n2. Resumen de Regresión:")
print(model.summary())

# --- VISUALIZACIÓN ---

# Gráfico 1: Boxplot (Diagrama de Caja)
# Ideal para ver si la MEDIANA de la calificación sube cuando tienes más JSON-LD
plt.figure(figsize=(10, 6))
sns.boxplot(x=x_col, y=y_col, data=df_clean, palette="Blues")
sns.stripplot(x=x_col, y=y_col, data=df_clean, color='black', alpha=0.3, jitter=True) # Muestra los puntos reales
plt.title(f'Impacto de {x_col} en {y_col}')
plt.ylabel('Calificación de Pertinencia (1-5)')
plt.xlabel('Cantidad de JSON-LD encontrados')
plt.grid(axis='y', linestyle='--', alpha=0.5)
plt.savefig('analisis_jsonld_boxplot.png')
plt.show()

# Gráfico 2: Regresión Visual (Tendencia)
plt.figure(figsize=(10, 6))
sns.regplot(x=x_col, y=y_col, data=df_clean, x_jitter=0.1, y_jitter=0.1, 
            scatter_kws={'alpha':0.5}, line_kws={'color':'red'})
plt.title(f'Tendencia: {x_col} vs {y_col}')
plt.savefig('analisis_jsonld_regresion.png')
plt.show()