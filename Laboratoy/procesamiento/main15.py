import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import statsmodels.api as sm
from scipy import stats
from sqlalchemy import create_engine
import tkinter as tk
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg

# =============================================================================
# 1. CONFIGURACIÓN Y CARGA DE DATOS
# =============================================================================
print("--- CARGANDO DATOS ---")

DB_USER = "postgres.hgsxnscedselcjiucliu"
DB_PASSWORD = "QofEJ6JxWNGuairn"
DB_HOST = "aws-1-us-east-2.pooler.supabase.com"
DB_PORT = "6543"
DB_NAME = "postgres"

connection_str = f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
engine = create_engine(connection_str)

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
df_high_pertinence = df_all[df_all['calificacion_pertinencia'] >= 3].copy()

print(f"Datos cargados. Registros totales: {len(df_all)}")

# =============================================================================
# 2. CONSTRUCCIÓN DE LA FIGURA (NO MOSTRAR AÚN)
# =============================================================================

# Definimos una altura muy grande (40 pulgadas) para que todo quepa holgadamente
fig, axes = plt.subplots(nrows=6, ncols=3, figsize=(18, 40))
plt.subplots_adjust(hspace=0.5, wspace=0.3)
ax = axes.flatten()

fig.suptitle("DASHBOARD INTEGRAL CON SCROLL", fontsize=20, y=0.995)

# --- FILA 1 ---
sns.boxplot(x='calificacion_pertinencia', y='num_jsonld', data=df_high_pertinence, ax=ax[0], palette="viridis")
ax[0].set_title('1. JSON-LD vs Pertinencia')

df_micro = df_high_pertinence[df_high_pertinence['num_microdata'] >= 1]
if not df_micro.empty:
    sns.boxplot(x='calificacion_pertinencia', y='num_microdata', data=df_micro, ax=ax[1], palette="magma")
else:
    ax[1].text(0.5, 0.5, "Sin datos", ha='center')
ax[1].set_title('2. Microdata vs Pertinencia')

sns.boxplot(x='calificacion_pertinencia', y='fair_score', data=df_high_pertinence, ax=ax[2], palette="viridis")
sns.stripplot(x='calificacion_pertinencia', y='fair_score', data=df_high_pertinence, ax=ax[2], color='black', alpha=0.3)
ax[2].set_title('3. FAIR Score Global')

# --- FILA 2 (Scores Técnicos) ---
cols_tech = ['seo_score', 'accesibility_score', 'performance_score']
for i, col in enumerate(cols_tech):
    sns.boxplot(x='calificacion_pertinencia', y=col, data=df_high_pertinence, ax=ax[3+i], palette="Blues")
    ax[3+i].set_title(f'{col.upper()} vs Pertinencia')

# --- FILA 3 (Heatmaps y UX) ---
cols_fair_indiv = ['f1_score', 'f2_score', 'f3_score', 'f4_score', 'i1_score', 'i2_score', 'i3_score', 'calificacion_pertinencia']
corr_fair = df_all[cols_fair_indiv].dropna().corr(method='spearman')
sns.heatmap(corr_fair, annot=True, cmap='coolwarm', vmin=-1, vmax=1, fmt=".2f", ax=ax[6], cbar=False)
ax[6].set_title('Correlaciones: Principios FAIR')

cols_ux = ['sentimiento_encontrabilidad', 'complejidad_percibida', 'tiempo_hasta_encontrar', 'calificacion_pertinencia']
corr_ux = df_all[cols_ux].dropna().corr(method='spearman')
sns.heatmap(corr_ux, annot=True, cmap='RdYlGn', vmin=-1, vmax=1, fmt=".2f", ax=ax[7], cbar=False)
ax[7].set_title('Correlaciones: UX')

sns.regplot(x='sentimiento_encontrabilidad', y='complejidad_percibida', data=df_all, ax=ax[8], 
            scatter_kws={'alpha':0.3}, line_kws={'color':'red'})
ax[8].set_title('UX: Complejidad vs Sentimiento')

# --- FILAS 4-6 (Detalle Principios) ---
principios = ['f1_score', 'f2_score', 'f3_score', 'f4_score', 'i1_score', 'i2_score', 'i3_score']
for i, princ in enumerate(principios):
    idx = 9 + i
    sns.boxplot(x=princ, y='calificacion_pertinencia', data=df_all, ax=ax[idx], palette="Set2", orient='h')
    ax[idx].set_title(f'Impacto {princ.upper()}')

# Limpiar ejes sobrantes
for j in range(9 + len(principios), 18):
    fig.delaxes(ax[j])

# =============================================================================
# 3. VENTANA CON SCROLL (TKINTER)
# =============================================================================
print("Generando ventana interactiva con scroll...")

def mostrar_ventana_con_scroll(figure):
    # Crear ventana raíz
    root = tk.Tk()
    root.title("Resultados Completos (Scrollable)")
    
    # Obtener dimensiones de pantalla para ajustar tamaño inicial
    screen_width = root.winfo_screenwidth()
    screen_height = root.winfo_screenheight()
    root.geometry(f"{int(screen_width*0.8)}x{int(screen_height*0.9)}") # 80% ancho, 90% alto

    # Crear Canvas y Scrollbar
    canvas = tk.Canvas(root)
    scrollbar = tk.Scrollbar(root, orient="vertical", command=canvas.yview)
    scrollable_frame = tk.Frame(canvas)

    # Configurar el evento de scroll
    scrollable_frame.bind(
        "<Configure>",
        lambda e: canvas.configure(scrollregion=canvas.bbox("all"))
    )

    # Dibujar el frame dentro del canvas
    canvas.create_window((0, 0), window=scrollable_frame, anchor="nw")
    canvas.configure(yscrollcommand=scrollbar.set)

    # Empaquetar elementos (Layout)
    canvas.pack(side="left", fill="both", expand=True)
    scrollbar.pack(side="right", fill="y")

    # Incrustar la figura de Matplotlib
    canvas_fig = FigureCanvasTkAgg(figure, master=scrollable_frame)
    canvas_fig.draw()
    canvas_fig.get_tk_widget().pack(side="top", fill="both", expand=True)

    # Añadir scroll con rueda del ratón (opcional, funciona en Windows/Linux)
    def _on_mousewheel(event):
        canvas.yview_scroll(int(-1*(event.delta/120)), "units")
    canvas.bind_all("<MouseWheel>", _on_mousewheel)

    root.mainloop()

# Ejecutar la ventana
mostrar_ventana_con_scroll(fig)