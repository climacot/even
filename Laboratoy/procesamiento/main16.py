import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
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
	DISTINCT R.ID,
	R.URL,
	AE.F1_SCORE,
	AE.F2_SCORE,
	AE.F3_SCORE,
	AE.F4_SCORE,
	AE.I1_SCORE,
	AE.I2_SCORE,
	AE.I3_SCORE
FROM
	AUTH.USERS U
	RIGHT JOIN PUBLIC.SEARCH_SESSION SS ON U.ID = SS.USER_ID
	RIGHT JOIN PUBLIC.TASK_SESSION TS ON TS.SEARCH_SESSION_ID = SS.ID
	INNER JOIN PUBLIC.TASK_SESSION_RESOURCE TSR ON TS.ID = TSR.TASK_SESSION_ID
	LEFT JOIN PUBLIC.RESOURCE R ON TSR.RESOURCE_ID = R.ID
	LEFT JOIN PUBLIC.AUTOMATIC_EVALUATION AE ON R.AUTOMATIC_EVALUATION_ID = AE.ID
WHERE
	TSR.PERTINENCE_SCORE IS NOT NULL
  AND TSR.PERTINENCE_SCORE >= 3;
"""

# Lista de las columnas que te interesan
columnas_interes = ['id', 'url', 'f1_score', 'f2_score', 'f3_score', 'f4_score', 'i1_score', 'i2_score', 'i3_score']

# Sobreescribes el df original seleccionando solo esas columnas
df = pd.read_sql(query, engine)
df = df[columnas_interes]

# 2. PRE-PROCESAMIENTO Y CÁLCULOS AGREGADOS
# ---------------------------------------------------------
# Calcular promedios por principio general (F y I)
cols_f = ['f1_score', 'f2_score', 'f3_score', 'f4_score']
cols_i = ['i1_score', 'i2_score', 'i3_score']

df['F_mean'] = df[cols_f].mean(axis=1)
df['I_mean'] = df[cols_i].mean(axis=1)
df['Total_Score'] = df[cols_f + cols_i].mean(axis=1)

# 3. ANÁLISIS ESTADÍSTICO DESCRIPTIVO
# ---------------------------------------------------------
desc_stats = df[cols_f + cols_i + ['F_mean', 'I_mean']].describe()
print("\n--- ESTADÍSTICAS DESCRIPTIVAS ---")
print(desc_stats.loc[['mean', 'std', 'min', '50%', 'max']])

# Identificar el principio con mejor y peor desempeño promedio
mean_scores = df[cols_f + cols_i].mean()
best_principle = mean_scores.idxmax()
worst_principle = mean_scores.idxmin()

print(f"\n>>> CONCLUSIÓN AUTOMÁTICA 1:")
print(f"El principio mejor implementado es '{best_principle}' con un promedio de {mean_scores.max():.2f}")
print(f"El principio con más fallas es '{worst_principle}' con un promedio de {mean_scores.min():.2f}")

# 4. VISUALIZACIÓN DE DATOS
# ---------------------------------------------------------
plt.figure(figsize=(15, 10))

# Gráfico A: Boxplot para comparar la distribución de cada sub-principio
plt.subplot(2, 2, 1)
sns.boxplot(data=df[cols_f + cols_i], palette="viridis")
plt.title('Distribución de Scores por Principio (Boxplot)')
plt.ylabel('Score')
plt.xticks(rotation=45)
plt.grid(True, linestyle='--', alpha=0.6)

# Gráfico B: Histograma de los promedios generales F vs I
plt.subplot(2, 2, 2)
sns.histplot(df['F_mean'], color='skyblue', label='Findable (F)', kde=True, alpha=0.6)
sns.histplot(df['I_mean'], color='orange', label='Interoperable (I)', kde=True, alpha=0.6)
plt.title('Comparación de Distribuciones: F vs I')
plt.legend()

# Gráfico C: Mapa de calor de correlaciones
# (Ayuda a ver si cumplir F1 implica cumplir F2, etc.)
plt.subplot(2, 2, 3)
corr = df[cols_f + cols_i].corr()
sns.heatmap(corr, annot=True, cmap='coolwarm', vmin=-1, vmax=1, fmt=".2f")
plt.title('Matriz de Correlación entre Principios')

# Gráfico D: Top 5 Webs (Mejores Scores Totales)
plt.subplot(2, 2, 4)
top_5 = df.nlargest(5, 'Total_Score')
sns.barplot(x='Total_Score', y='id', data=top_5, orient='h', hue='id', palette='Blues_r', legend=False)
plt.title('Top 5 IDs con mejor cumplimiento FAIR')
plt.xlabel('Score Promedio Total')

plt.tight_layout()
plt.show()

# 5. DETECCIÓN DE OUTLIERS (Casos extremos)
# ---------------------------------------------------------
# Definimos webs con muy bajo rendimiento (ej. bajo el percentil 10)
threshold = df['Total_Score'].quantile(0.10)
low_performers = df[df['Total_Score'] < threshold]

print(f"\n>>> CONCLUSIÓN AUTOMÁTICA 2:")
print(f"Se detectaron {len(low_performers)} webs con rendimiento crítico (Bottom 10%).")
print(f"IDs a revisar urgentemente: {low_performers['id'].tolist()}")
# ---------------------------------------------------------

# 1. CONFIGURACIÓN DE ESTILO
sns.set(style="whitegrid")

# --- (Bloque de datos de prueba - Reemplaza con tu carga real) ---
# Generamos datos FLOAT (con decimales) a propósito para probar la corrección
# ---------------------------------------------------------------

# 2. LIMPIEZA Y PREPARACIÓN DE DATOS (¡El paso clave!)
# ---------------------------------------------------------
principles = [col for col in df.columns if 'score' in col] # Detectar columnas score

# "Derretimos" el dataframe
df_melted = df.melt(id_vars=['id'], value_vars=principles, var_name='Principio', value_name='Puntaje')

# --- CORRECCIÓN DE TIPOS ---
# 1. Forzamos a numérico (por si hay textos raros)
df_melted['Puntaje'] = pd.to_numeric(df_melted['Puntaje'], errors='coerce')
# 2. Eliminamos nulos
df_melted = df_melted.dropna(subset=['Puntaje'])
# 3. Convertimos a entero (quita el .0 de los decimales)
df_melted['Puntaje'] = df_melted['Puntaje'].astype(int)
# 4. Finalmente a String para que el gráfico los agrupe bien
df_melted['Puntaje_Str'] = df_melted['Puntaje'].astype(str)

# Imprimir verificación para que veas qué datos entran al gráfico
print("Valores únicos encontrados:", df_melted['Puntaje_Str'].unique())

# 3. VISUALIZACIÓN (GRID)
# ---------------------------------------------------------
colores = {'0': "#D32F2F", '50': "#FFCA28", '100': "#388E3C"}

g = sns.catplot(
    data=df_melted, 
    x='Puntaje_Str', 
    col='Principio', 
    col_wrap=3,             # 3 gráficos por fila
    kind='count', 
    palette=colores, 
    height=4, aspect=0.8,
    sharex=False,           # Ejes X independientes
    order=['0', '50', '100'] # Ahora sí coincidirá seguro con el string
)

g.fig.subplots_adjust(top=0.9)
g.fig.suptitle('Frecuencia de Cumplimiento por Principio', fontsize=16)

# Añadir etiquetas numéricas
for ax in g.axes.flat:
    for p in ax.patches:
        height = p.get_height()
        if height > 0: # Solo etiquetar si hay barra
            ax.annotate(f'{int(height)}',
                        (p.get_x() + p.get_width() / 2., height),
                        ha='center', va='center', 
                        xytext=(0, 5), 
                        textcoords='offset points',
                        fontweight='bold')

g.set_axis_labels("Puntaje", "Cant. Webs")
plt.show()