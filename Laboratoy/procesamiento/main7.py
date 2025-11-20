import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
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
	TSR.PERTINENCE_SCORE IS NOT NULL;
"""

# --- EJECUCIÓN Y CARGA EN DATAFRAME ---
print("Conectando a Supabase y descargando datos...")
df = pd.read_sql(query, engine)

print("Datos cargados exitosamente.")
print(f"Se obtuvieron {len(df)} filas.")

# Definir variables
fair_col = 'fair_score'
sub_scores = ['f1_score', 'f2_score', 'f3_score', 'i1_score', 'i2_score', 'i3_score']
target = 'calificacion_pertinencia'

# Limpieza
all_cols = [fair_col] + sub_scores + [target]
for col in all_cols:
    df[col] = pd.to_numeric(df[col], errors='coerce')
df = df.dropna(subset=all_cols)

# --- ANÁLISIS 1: ¿Aumenta FAIR Score con la Pertinencia? ---
corr_fair = df[fair_col].corr(df[target])
print(f"\n--- 1. ANÁLISIS FAIR SCORE ---")
print(f"Correlación (Pearson): {corr_fair:.4f}")
if corr_fair > 0.3:
    print("Conclusión: SÍ, existe una relación positiva considerable.")
elif corr_fair < -0.3:
    print("Conclusión: CURIOSO, la relación es inversa.")
else:
    print("Conclusión: La relación es débil o inexistente.")

plt.figure(figsize=(8, 6))
sns.regplot(x=fair_col, y=target, data=df, line_kws={'color':'red'})
plt.title(f'Relación Global: {fair_col} vs Pertinencia')
plt.savefig('analisis_fair_global.png')
plt.show()

# --- ANÁLISIS 2: ¿Qué sub-variable (F/I) afecta más? ---
print(f"\n--- 2. ANÁLISIS DE COMPONENTES (F y I) ---")

# Matriz de correlación específica
heatmap_data = df[sub_scores + [target]].corr()
plt.figure(figsize=(10, 8))
sns.heatmap(heatmap_data, annot=True, cmap='coolwarm', vmin=-1, vmax=1)
plt.title('Impacto de cada variable F/I en la Pertinencia')
plt.savefig('analisis_fi_heatmap.png')
plt.show()

# Regresión para ver "Peso" de cada variable
X = df[sub_scores]
y = df[target]
X = sm.add_constant(X)
model = sm.OLS(y, X).fit()

print(model.summary())
print("\nGUÍA RÁPIDA:")
print("- Mira la columna 'P>|t|'. Si es < 0.05, esa variable (ej. f1_score) es CLAVE para la pertinencia.")
print("- Mira la columna 'coef'. Si es positivo, cumplir esa métrica (tener 100) sube la calificación.")