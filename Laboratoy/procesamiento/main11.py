import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
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
  AND PERTINENCE_SCORE >= 3;
"""

# Lista de las columnas que te interesan
columnas_interes = ['seo_score', 'accesibility_score', 'performance_score', 'calificacion_pertinencia']

# Sobreescribes el df original seleccionando solo esas columnas
df = pd.read_sql(query, engine)
df = df[columnas_interes]

# ---------------------------------------------------------
# 3. ANÁLISIS DE CORRELACIÓN (SPEARMAN)
# ---------------------------------------------------------
# Usamos Spearman porque la calificación es ordinal (rankings), no intervalos perfectos.
corr_matrix = df.corr(method='spearman')

print("Matriz de Correlación de Spearman con 'calificacion_pertinencia':")
print(corr_matrix[['calificacion_pertinencia']].sort_values(by='calificacion_pertinencia', ascending=False))
print("-" * 50)

plt.figure(figsize=(8, 6))
sns.heatmap(corr_matrix, annot=True, cmap='coolwarm', fmt=".2f")
plt.title("Mapa de Calor de Correlaciones (Spearman)")
plt.show()

# ---------------------------------------------------------
# 4. VISUALIZACIÓN (BOXPLOTS)
# ---------------------------------------------------------
# Los boxplots son ideales para ver la distribución de una variable continua (scores)
# respecto a una categórica/ordinal (calificación).

fig, axes = plt.subplots(1, 3, figsize=(18, 5))
predictors = ['seo_score', 'accesibility_score', 'performance_score']

for i, col in enumerate(predictors):
    sns.boxplot(x='calificacion_pertinencia', y=col, data=df, ax=axes[i], palette="viridis")
    # sns.stripplot(x='calificacion_pertinencia', y=col, data=df, color='black', alpha=0.3, jitter=True)
    axes[i].set_title(f'Impacto de {col} en Pertinencia')
    axes[i].set_xlabel('Calificación Pertinencia (3-5)')
    axes[i].set_ylabel(f'{col} (0-1)')

plt.tight_layout()
plt.show()

# ---------------------------------------------------------
# 5. MODELO ESTADÍSTICO (REGRESIÓN LINEAL - OLS)
# ---------------------------------------------------------
# Usamos OLS (Mínimos Cuadrados Ordinarios) para cuantificar el impacto.
# Interpretación: "Coeficiente" indica cuánto sube la pertinencia si el score sube de 0 a 1.

X = df[['seo_score', 'accesibility_score', 'performance_score']]
y = df['calificacion_pertinencia']

# Añadir constante (intercepto) requerida por statsmodels
X = sm.add_constant(X)

model = sm.OLS(y, X).fit()

print(model.summary())

# Interpretación rápida para el usuario
print("\n--- INTERPRETACIÓN RÁPIDA ---")
print("Busca la columna 'P>|t|'. Si el valor es menor a 0.05, esa variable es estadísticamente significativa.")
print("Busca la columna 'coef'. Si es positivo, significa que mejorar ese score aumenta la pertinencia.")