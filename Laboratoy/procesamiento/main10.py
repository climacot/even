import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from scipy import stats
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

df = pd.read_sql(query, engine)

# ---------------------------------------------------------
# 2. Análisis Estadístico: Correlación de Spearman
# ---------------------------------------------------------

# Calculamos el coeficiente y el p-valor
rho, p_value = stats.spearmanr(df['fair_score'], df['calificacion_pertinencia'])

print(f"Coeficiente de Correlación de Spearman (rho): {rho:.4f}")
print(f"Valor P (p-value): {p_value:.4e}")

# Interpretación automática
print("\n--- Interpretación ---")
if p_value < 0.05:
    print("RESULTADO: Existe una correlación estadísticamente significativa.")
    if rho > 0:
        print(f"La relación es POSITIVA (rho={rho:.2f}). A mayor Fair Score, mayor Calificación.")
    elif rho < 0:
        print(f"La relación es NEGATIVA (rho={rho:.2f}). A mayor Fair Score, menor Calificación.")
else:
    print("RESULTADO: No hay evidencia estadística suficiente para afirmar que existe una relación.")

# ---------------------------------------------------------
# 3. Visualización (Boxplot)
# ---------------------------------------------------------
# El Boxplot es ideal para ver cómo se distribuye el score numérico 
# dentro de cada categoría ordinal (1-5).

plt.figure(figsize=(10, 6))

# Boxplot para ver la distribución
sns.boxplot(x='calificacion_pertinencia', y='fair_score', data=df, palette="viridis")

# Agregamos puntos (stripplot) para ver la densidad de datos reales
sns.stripplot(x='calificacion_pertinencia', y='fair_score', data=df, color='black', alpha=0.3, jitter=True)

plt.title('Distribución del FAIR Score según la Calificación de Pertinencia')
plt.xlabel('Calificación de Pertinencia (3-5)')
plt.ylabel('FAIR Score (0-100)')
plt.grid(True, linestyle='--', alpha=0.7)

plt.show()