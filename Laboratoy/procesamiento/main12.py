import pandas as pd
import numpy as np
import statsmodels.api as sm
import seaborn as sns
import matplotlib.pyplot as plt
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
	TSR.PERTINENCE_SCORE IS NOT NULL;
"""

# Lista de las columnas que te interesan
columnas_interes = ['f1_score', 'f2_score', 'f3_score', 'f4_score', 'i1_score', 'i2_score', 'i3_score', 'calificacion_pertinencia']

# Sobreescribes el df original seleccionando solo esas columnas
df = pd.read_sql(query, engine)
df = df[columnas_interes]

# ---------------------------------------------------------
# 2. ANÁLISIS DE CORRELACIÓN (SPEARMAN)
# ---------------------------------------------------------
# Usamos Spearman porque evalúa relaciones monótonas (rankings) y no solo lineales.
correlation_matrix = df.corr(method='spearman')

plt.figure(figsize=(10, 8))
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', vmin=-1, vmax=1)
plt.title('Matriz de Correlación de Spearman\n(Relación entre Principios y Pertinencia)')
plt.show()

# ---------------------------------------------------------
# 2. VISUALIZACIÓN MÚLTIPLE (LO QUE PEDISTE)
# ---------------------------------------------------------
variables_a_analizar = ['f1_score', 'f2_score', 'f3_score', 'f4_score', 'i1_score', 'i2_score', 'i3_score']

# Creamos una figura con subgráficos (2 filas, 3 columnas)
fig, axes = plt.subplots(nrows=2, ncols=4, figsize=(18, 10))
axes = axes.flatten() # Aplanamos para iterar fácilmente

for i, col in enumerate(variables_a_analizar):
    # Usamos boxplot para ver la distribución de calificaciones en cada nivel
    sns.boxplot(x=col, y='calificacion_pertinencia', data=df, ax=axes[i], palette="Set2")
    axes[i].set_title(f'Impacto de {col}')
    axes[i].set_ylabel('Calificación (1-5)')
    axes[i].set_xlabel('Puntaje de Cumplimiento')

plt.tight_layout()
plt.show()

# ---------------------------------------------------------
# 3. ANÁLISIS ESTADÍSTICO (OLS) PARA TODAS LAS VARIABLES
# ---------------------------------------------------------
X = df[variables_a_analizar]
Y = df['calificacion_pertinencia']
X = sm.add_constant(X) # Agregar intercepto

model = sm.OLS(Y, X).fit()
print(model.summary())