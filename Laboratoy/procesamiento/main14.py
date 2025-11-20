import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import statsmodels.api as sm
from scipy import stats
from sqlalchemy import create_engine
import numpy as np

# =============================================================================
# 1. CONFIGURACIÓN Y CARGA DE DATOS (UNIFICADA)
# =============================================================================

print("--- INICIANDO CONEXIÓN Y CARGA DE DATOS ---")

DB_USER = "postgres.hgsxnscedselcjiucliu"
DB_PASSWORD = "QofEJ6JxWNGuairn"
DB_HOST = "aws-1-us-east-2.pooler.supabase.com"
DB_PORT = "6543"
DB_NAME = "postgres"

connection_str = f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
engine = create_engine(connection_str)

# Consulta maestra con TODAS las columnas necesarias para los 6 análisis
query_master = """
SELECT
    TS.ID AS sesion_id,
    TS.CAT_TASK_ID AS tarea_id,
    U.RAW_USER_META_DATA AS nombre_usuario,
    TS.FEELING_SCORE AS sentimiento_encontrabilidad,
    TS.COMPLEXITY_SCORE AS complejidad_percibida,
    TS.START_AT AS inicio_tarea,
    TS.END_AT AS final_tarea,
    TSR.PERTINENCE_SCORE AS calificacion_pertinencia,
    TSR.NAVIGATED_AT AS hora_navegacion,
    ROUND(EXTRACT(EPOCH FROM (TSR.NAVIGATED_AT - TS.START_AT)) / 60, 2) AS tiempo_hasta_encontrar,
    ROW_NUMBER() OVER (PARTITION BY TS.ID ORDER BY TSR.NAVIGATED_AT) - 1 AS navegaciones_hasta_encontrar,
    R.URL,
    AE.NUM_MICRODATA AS num_microdata,
    AE.NUM_MICROFORMATS AS num_microformats,
    AE.NUM_RDFA AS num_rdfa,
    AE.NUM_JSONLD AS num_jsonld,
    AE.FAIR_SCORE AS fair_score,
    AE.F1_SCORE AS f1_score,
    AE.F2_SCORE AS f2_score,
    AE.F3_SCORE AS f3_score,
    AE.F4_SCORE AS f4_score,
    AE.I1_SCORE AS i1_score,
    AE.I2_SCORE AS i2_score,
    AE.I3_SCORE AS i3_score,
    AE.SEO_SCORE AS seo_score,
    AE.ACCESIBILITY_SCORE AS accesibility_score,
    AE.PERFORMANCE_SCORE AS performance_score
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

df_all = pd.read_sql(query_master, engine)

# Crear subconjunto filtrado (Pertinencia >= 3) usado en main8, 9, 10, 11
df_high_pertinence = df_all[df_all['calificacion_pertinencia'] >= 3].copy()

print(f"Datos cargados exitosamente.")
print(f"Registros totales: {len(df_all)}")
print(f"Registros con Pertinencia >= 3: {len(df_high_pertinence)}")
print("\n" + "="*60 + "\n")


# =============================================================================
# 2. ANÁLISIS 1: JSON-LD (Basado en main8.py)
# =============================================================================
def analisis_jsonld():
    print("### ANÁLISIS 1: CALIFICACIÓN vs JSON-LD ###")
    print("(Filtro: Pertinencia >= 3)")
    
    df = df_high_pertinence

    # Visualización
    plt.figure(figsize=(8, 5))
    sns.boxplot(x='calificacion_pertinencia', y='num_jsonld', data=df, palette="viridis")
    plt.title('Distribución de JSON-LD según Calificación (Pertinencia >= 3)')
    plt.xlabel('Calificación')
    plt.ylabel('Cantidad JSON-LD')
    plt.grid(True, linestyle='--', alpha=0.5)
    plt.show()

    # Spearman
    coef, p_value = stats.spearmanr(df['calificacion_pertinencia'], df['num_jsonld'])
    print(f"-> Spearman rho: {coef:.4f}, p-value: {p_value:.4e}")
    
    # Kruskal-Wallis
    grupos = [df[df['calificacion_pertinencia'] == i]['num_jsonld'] for i in sorted(df['calificacion_pertinencia'].unique())]
    if len(grupos) > 1:
        stat, p_val_kruskal = stats.kruskal(*grupos)
        print(f"-> Kruskal-Wallis H: {stat:.4f}, p-value: {p_val_kruskal:.4e}")
    else:
        print("-> Kruskal-Wallis: No hay suficientes grupos para comparar.")
    print("-" * 60)

analisis_jsonld()


# =============================================================================
# 3. ANÁLISIS 2: MICRODATA (Basado en main9.py)
# =============================================================================
def analisis_microdata():
    print("\n### ANÁLISIS 2: CALIFICACIÓN vs MICRODATA ###")
    print("(Filtro: Pertinencia >= 3 Y Num Microdata >= 1)")
    
    # Filtro adicional específico de este análisis
    df = df_high_pertinence[df_high_pertinence['num_microdata'] >= 1].copy()

    if df.empty:
        print("No hay datos que cumplan la condición (Microdata >= 1). Saltando...")
        return

    # Visualización
    plt.figure(figsize=(8, 5))
    sns.boxplot(x='calificacion_pertinencia', y='num_microdata', data=df, palette="magma")
    plt.title('Distribución de MICRODATA (donde existe >= 1)')
    plt.grid(True, linestyle='--', alpha=0.5)
    plt.show()

    # Spearman
    coef, p_value = stats.spearmanr(df['calificacion_pertinencia'], df['num_microdata'])
    print(f"-> Spearman rho: {coef:.4f}, p-value: {p_value:.4e}")

    # Kruskal-Wallis
    grupos = [df[df['calificacion_pertinencia'] == i]['num_microdata'] for i in sorted(df['calificacion_pertinencia'].unique())]
    if len(grupos) > 1:
        stat, p_val_kruskal = stats.kruskal(*grupos)
        print(f"-> Kruskal-Wallis H: {stat:.4f}, p-value: {p_val_kruskal:.4e}")
    else:
        print("-> Kruskal-Wallis: No hay suficientes grupos.")
    print("-" * 60)

analisis_microdata()


# =============================================================================
# 4. ANÁLISIS 3: FAIR SCORE (Basado en main10.py)
# =============================================================================
def analisis_fair_score():
    print("\n### ANÁLISIS 3: CALIFICACIÓN vs FAIR SCORE ###")
    print("(Filtro: Pertinencia >= 3)")
    
    df = df_high_pertinence

    # Spearman
    rho, p_value = stats.spearmanr(df['fair_score'], df['calificacion_pertinencia'])
    print(f"-> Spearman rho: {rho:.4f}, p-value: {p_value:.4e}")

    # Visualización
    plt.figure(figsize=(8, 5))
    sns.boxplot(x='calificacion_pertinencia', y='fair_score', data=df, palette="viridis")
    sns.stripplot(x='calificacion_pertinencia', y='fair_score', data=df, color='black', alpha=0.3, jitter=True)
    plt.title('Distribución del FAIR Score según Pertinencia')
    plt.grid(True, linestyle='--', alpha=0.5)
    plt.show()
    print("-" * 60)

analisis_fair_score()


# =============================================================================
# 5. ANÁLISIS 4: SEO, ACCESIBILIDAD, PERFORMANCE (Basado en main11.py)
# =============================================================================
def analisis_scores_tecnicos():
    print("\n### ANÁLISIS 4: SCORES TÉCNICOS (SEO, ACC, PERF) ###")
    print("(Filtro: Pertinencia >= 3)")
    
    df = df_high_pertinence[['seo_score', 'accesibility_score', 'performance_score', 'calificacion_pertinencia']].dropna()

    # Spearman Matrix
    print("Matriz de Correlación (Spearman):")
    corr = df.corr(method='spearman')
    print(corr[['calificacion_pertinencia']])

    # Visualización Multiple
    fig, axes = plt.subplots(1, 3, figsize=(16, 5))
    cols = ['seo_score', 'accesibility_score', 'performance_score']
    for i, col in enumerate(cols):
        sns.boxplot(x='calificacion_pertinencia', y=col, data=df, ax=axes[i], palette="viridis")
        axes[i].set_title(f'{col} vs Pertinencia')
    plt.tight_layout()
    plt.show()

    # Regresión OLS
    X = df[['seo_score', 'accesibility_score', 'performance_score']]
    X = sm.add_constant(X)
    y = df['calificacion_pertinencia']
    
    try:
        model = sm.OLS(y, X).fit()
        print("\nResultados Regresión OLS (Impacto Técnico en Pertinencia):")
        print(model.summary())
    except Exception as e:
        print(f"No se pudo ejecutar OLS (posiblemente datos insuficientes): {e}")
    print("-" * 60)

analisis_scores_tecnicos()


# =============================================================================
# 6. ANÁLISIS 5: PRINCIPIOS FAIR (Basado en main12.py)
# =============================================================================
def analisis_principios_fair():
    print("\n### ANÁLISIS 5: PRINCIPIOS FAIR (F1-F4, I1-I3) ###")
    print("(Filtro: TODOS los recursos con calificación)")
    
    # Nota: main12 usa df_all (sin filtro >=3), solo pertinence is not null
    cols_interes = ['f1_score', 'f2_score', 'f3_score', 'f4_score', 'i1_score', 'i2_score', 'i3_score', 'calificacion_pertinencia']
    df = df_all[cols_interes].dropna()

    # Matriz Spearman
    plt.figure(figsize=(8, 6))
    sns.heatmap(df.corr(method='spearman'), annot=True, cmap='coolwarm', vmin=-1, vmax=1)
    plt.title('Correlación Spearman: Principios FAIR vs Pertinencia')
    plt.show()

    # Visualización Grid
    vars_fair = ['f1_score', 'f2_score', 'f3_score', 'f4_score', 'i1_score', 'i2_score', 'i3_score']
    fig, axes = plt.subplots(nrows=2, ncols=4, figsize=(18, 10))
    axes = axes.flatten()
    for i, col in enumerate(vars_fair):
        sns.boxplot(x=col, y='calificacion_pertinencia', data=df, ax=axes[i], palette="Set2")
        axes[i].set_title(f'Impacto {col}')
        axes[i].set_ylabel('Pertinencia')
    
    # Ocultar el 8vo plot vacío si sobra
    if len(vars_fair) < 8:
        axes[-1].axis('off')
        
    plt.tight_layout()
    plt.show()

    # Regresión OLS
    X = df[vars_fair]
    X = sm.add_constant(X)
    y = df['calificacion_pertinencia']
    try:
        model = sm.OLS(y, X).fit()
        print("\nResultados Regresión OLS (Principios FAIR):")
        print(model.summary())
    except:
        pass
    print("-" * 60)

analisis_principios_fair()


# =============================================================================
# 7. ANÁLISIS 6: VARIABLES UX Y COMPLEJIDAD (Basado en main13.py)
# =============================================================================
def analisis_ux():
    print("\n### ANÁLISIS 6: EXPERIENCIA DE USUARIO (UX) ###")
    print("(Filtro: TODOS los recursos)")
    
    cols_ux = ['sentimiento_encontrabilidad', 'complejidad_percibida', 
               'tiempo_hasta_encontrar', 'navegaciones_hasta_encontrar', 
               'calificacion_pertinencia']
    
    df = df_all[cols_ux].dropna()

    # Spearman Heatmap
    plt.figure(figsize=(8, 6))
    sns.heatmap(df.corr(method='spearman'), annot=True, cmap='coolwarm', fmt=".2f")
    plt.title('Correlación Spearman: Variables UX')
    plt.show()

    # Regresión OLS: ¿Qué predice la Complejidad?
    # Predictores: Sentimiento + Pertinencia
    X = df[['sentimiento_encontrabilidad', 'calificacion_pertinencia']]
    X = sm.add_constant(X)
    y = df['complejidad_percibida']
    
    try:
        model = sm.OLS(y, X).fit()
        print("\nResultados Regresión OLS (Prediciendo Complejidad):")
        print(model.summary())
    except:
        pass

    # Pairplot final
    sns.pairplot(df, kind='reg', diag_kind='kde', 
                 plot_kws={'line_kws':{'color':'red'}, 'scatter_kws': {'alpha': 0.1}})
    plt.suptitle("Relaciones UX (Pairplot)", y=1.02)
    plt.show()
    print("-" * 60)

analisis_ux()

print("\n=== ANÁLISIS COMPLETO FINALIZADO ===")