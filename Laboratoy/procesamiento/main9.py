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
 	AND PERTINENCE_SCORE >= 3
	AND AE.NUM_MICRODATA >= 1;
"""

df = pd.read_sql(query, engine)

# Introducimos una ligera tendencia positiva artificial para el ejemplo:
# (A mayor calificación, sumamos un poco más de jsonld para ver si el test lo detecta)
# data['num_jsonld'] = data['num_jsonld'] + (data['calificacion_pertinencia'] * 2)
# df = pd.DataFrame(data)

# --- PASO 2: Visualización ---
# Usamos un Boxplot (Diagrama de Caja) para ver la distribución
plt.figure(figsize=(10, 6))
sns.boxplot(x='calificacion_pertinencia', y='num_microdata', data=df, palette="viridis")
plt.title('Distribución de MICRODATA según la Calificación de Pertinencia')
plt.xlabel('Calificación (3-5)')
plt.ylabel('Cantidad de MICRODATOS')
plt.grid(True, linestyle='--', alpha=0.7)
plt.show()

# --- PASO 3: Correlación de Spearman ---
# Usamos Spearman porque la calificación es ordinal (1-5)
coef, p_value = stats.spearmanr(df['calificacion_pertinencia'], df['num_microdata'])

print("--- RESULTADOS DE LA CORRELACIÓN DE SPEARMAN ---")
print(f"Coeficiente de Correlación (rho): {coef:.4f}")
print(f"Valor P (p-value): {p_value:.4e}")

if p_value < 0.05:
    print(">> Conclusión: Existe una correlación estadísticamente significativa.")
    if coef > 0:
        print(">> Dirección: La correlación es POSITIVA (más MICRODATA tiende a mejor calificación).")
    else:
        print(">> Dirección: La correlación es NEGATIVA (más MICRODATA tiende a peor calificación).")
else:
    print(">> Conclusión: NO hay evidencia suficiente para afirmar que existe una correlación.")

print("\n")

# --- PASO 4: Prueba de Diferencia de Grupos (Kruskal-Wallis) ---
# Agrupamos los datos de jsonld por cada calificación
grupos = [df[df['calificacion_pertinencia'] == i]['num_microdata'] for i in range(3, 6)]

stat, p_val_kruskal = stats.kruskal(*grupos)

print("--- RESULTADOS DE KRUSKAL-WALLIS (Diferencia de grupos) ---")
print(f"Estadístico H: {stat:.4f}")
print(f"Valor P: {p_val_kruskal:.4e}")

if p_val_kruskal < 0.05:
    print(">> Conclusión: La cantidad de MICRODATOS varía significativamente entre los diferentes grupos de calificación.")
else:
    print(">> Conclusión: No hay diferencias significativas en la cantidad de MICRODATOS entre las calificaciones.")