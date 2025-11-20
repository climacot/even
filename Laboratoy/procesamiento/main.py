import pandas as pd
import matplotlib.pyplot as plt

# Cargar el archivo CSV
# Asegúrate de que el archivo se encuentre en la misma ruta o ajusta el nombre según corresponda
file_path = 'dataset.csv'
df = pd.read_csv(file_path)

# Filtrar los datos para obtener solo los recursos web que tienen al menos un JSON-LD
# (num_jsonld >= 1)
df_filtered = df[df['num_jsonld'] >= 1]

# Definir las columnas a analizar y sus títulos para las gráficas
columns_info = {
    'complejidad_percibidad': 'Complejidad Percibida',
    'sentimiento_encontrabilidad': 'Sentimiento de Encontrabilidad',
    'calificacion_pertinencia': 'Calificación de Pertinencia'
}

# Crear una figura con 3 subgráficas (una para cada variable)
fig, axes = plt.subplots(1, 3, figsize=(18, 6))

# Generar las gráficas de barras para cada variable
for i, (col, title) in enumerate(columns_info.items()):
    # Contar la frecuencia de cada valor
    conteo = df_filtered[col].value_counts().sort_index()
    
    # Crear el gráfico de barras
    axes[i].bar(conteo.index, conteo.values, color='skyblue', edgecolor='black')
    
    # Configurar títulos y etiquetas
    axes[i].set_title(f'{title}\n(Webs con JSON-LD)')
    axes[i].set_xlabel('Valor / Calificación')
    axes[i].set_ylabel('Frecuencia')
    axes[i].grid(axis='y', linestyle='--', alpha=0.7)
    
    # Asegurar que el eje X muestre solo los valores enteros presentes
    axes[i].set_xticks(conteo.index)

# Ajustar el diseño para evitar superposiciones
plt.tight_layout()

# Mostrar las gráficas
plt.show()