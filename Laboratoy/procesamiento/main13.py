import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import statsmodels.api as sm
from sqlalchemy import create_engine

DB_USER = "postgres.hgsxnscedselcjiucliu"
DB_PASSWORD = "QofEJ6JxWNGuairn"
DB_HOST = "aws-1-us-east-2.pooler.supabase.com"
DB_PORT = "6543"
DB_NAME = "postgres"

connection_str = f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
engine = create_engine(connection_str)

query = """
SELECT
	TS.ID AS SESION_ID,
	TS.CAT_TASK_ID AS TAREA_ID,
	U.RAW_USER_META_DATA AS NOMBRE_USUARIO,
	TS.FEELING_SCORE AS SENTIMIENTO_ENCONTRABILIDAD,
	TS.COMPLEXITY_SCORE AS COMPLEJIDAD_PERCIBIDA,
	TS.START_AT AS INICIO_TAREA,
	TS.END_AT AS FINAL_TAREA,
	TSR.PERTINENCE_SCORE AS CALIFICACION_PERTINENCIA,
	TSR.NAVIGATED_AT AS HORA_NAVEGACION,
	ROUND(EXTRACT(EPOCH FROM (TSR.NAVIGATED_AT - TS.START_AT)) / 60, 2) AS TIEMPO_HASTA_ENCONTRAR,
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

# Lista de las columnas que te interesan
columnas_interes = ['sentimiento_encontrabilidad', 'complejidad_percibida', 'tiempo_hasta_encontrar', 'navegaciones_hasta_encontrar', 'calificacion_pertinencia']

# Sobreescribes el df original seleccionando solo esas columnas
df = pd.read_sql(query, engine)
df = df[columnas_interes]

# ---------------------------------------------------------
# 2. ANÁLISIS DE CORRELACIÓN (MÉTODO SPEARMAN)
# ---------------------------------------------------------
# Usamos Spearman porque tienes escalas ordinales (1-5) y datos no paramétricos
matriz_correlacion = df.corr(method='spearman')

plt.figure(figsize=(10, 8))
sns.heatmap(matriz_correlacion, annot=True, cmap='coolwarm', vmin=-1, vmax=1, fmt=".2f")
plt.title('Mapa de Calor: Correlación de Spearman')
plt.show()

print("\n--- INTERPRETACIÓN DE CORRELACIONES ---")
print("Valores cercanos a 1: Relación positiva fuerte.")
print("Valores cercanos a -1: Relación negativa fuerte (inversa).")
print("Valores cercanos a 0: No hay relación aparente.")

# ---------------------------------------------------------
# 3. ANÁLISIS DE REGRESIÓN (¿Qué predice la complejidad?)
# ---------------------------------------------------------
# Supongamos que queremos saber cómo el tiempo y las navegaciones influyen
# en la "Complejidad Percibida".

# Definimos variables
X = df[['sentimiento_encontrabilidad', 'calificacion_pertinencia']]
y = df['complejidad_percibida']

# Añadimos constante para el intercepto
X = sm.add_constant(X)

# Modelo OLS (Mínimos Cuadrados Ordinarios)
modelo = sm.OLS(y, X).fit()

print("\n--- RESULTADOS DE LA REGRESIÓN LINEAL (Impacto en Complejidad) ---")
print(modelo.summary())

# ---------------------------------------------------------
# 4. VISUALIZACIÓN DE PARES (SCATTER PLOTS)
# ---------------------------------------------------------
# Para ver visualmente cómo se agrupan los datos
sns.pairplot(df, kind='reg', diag_kind='kde', plot_kws={'line_kws':{'color':'red'}, 'scatter_kws': {'alpha': 0.5}})
plt.suptitle("Relaciones entre variables (Pairplot)", y=1.02)
plt.show()