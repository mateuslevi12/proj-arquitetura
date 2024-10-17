import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Carregar a planilha de dados
file_path = "C:\\Users\\mateu\\OneDrive\\Documentos\\Dados_Teste.xlsx" # ajuste o caminho se necessário

df = pd.read_excel(file_path)

# a) Quantitativo por Grau de instrução
# quantitativo_grau_instrucao = df['Grau de instrução'].value_counts().reset_index()
# quantitativo_grau_instrucao.columns = ['Grau de instrução', 'Quantitativo']
# print("Tabela quantitativo por Grau de instrução:")
# print(quantitativo_grau_instrucao.to_html(index=False))


# b) Quantitativo por Grau de instrução e Estado Civil
# quantitativo_grau_estado = df.groupby(['Grau de instrução', 'Estado Civil']).size().reset_index(name='Quantitativo')
# print("\nTabela quantitativo por Grau de instrução e Estado Civil:")
# print(quantitativo_grau_estado.to_html(index=False))

# # c) Percentual por Grau de instrução e Estado Civil (arredondado para 3 casas decimais e multiplicado por 100)
# percentual_grau_estado = df.groupby(['Grau de instrução', 'Estado Civil']).size() / len(df) * 100
# percentual_grau_estado = percentual_grau_estado.reset_index(name='Percentual')
# percentual_grau_estado['Percentual'] = percentual_grau_estado['Percentual'].round(3)
# print("\nTabela percentual por Grau de instrução e Estado Civil (em %):")
# print(percentual_grau_estado.to_html(index=False))

# # d) Tabela intervalos de classe de tamanho 10, fechado à esquerda
# # Considerando que a coluna com valores numéricos a ser classificada é 'Idade', ajuste se necessário
# idade_min = int(df['Idade'].min())  # Convertendo para inteiro
# idade_max = int(df['Idade'].max())  # Convertendo para inteiro
# intervalos_classe = pd.cut(df['Idade'], bins=range(idade_min, idade_max + 10, 10), right=False)

# tabela_intervalos = df.groupby(intervalos_classe, observed=True).size().reset_index(name='Frequência')
# print("\nTabela intervalos de classe de tamanho 10, fechado à esquerda:")
# print(tabela_intervalos)

# QUESTAO 2------------------------------------------------------------------
# df['Classificação'] = df['Idade'].apply(lambda idade: 'apta' if idade >= 30 else 'inapta')

# # Agrupar por Sexo e Classificação (apta/inapta) e contar o número de ocorrências
# tabela_aptidao_sexo = df.groupby(['Sexo', 'Classificação']).size().reset_index(name='Quantitativo')

# print(tabela_aptidao_sexo.to_html(index=False))

# QUESTAO 3------------------------------------------------------------------
# a) Gráfico de barras para a variável Grau de Instrução
# plt.figure(figsize=(8,6))
# df['Grau de instrução'].value_counts().plot(kind='bar', color='skyblue')
# plt.title('Gráfico por Grau de Instrução')
# plt.xlabel('Grau de Instrução')
# plt.ylabel('Quantidade')
# plt.xticks(rotation=45)
# plt.tight_layout()
# plt.show()

# b) Gráfico de setor (pizza) para a variável Sexo
plt.figure(figsize=(6,6))
df['Sexo'].value_counts().plot(kind='pie', colors=["#D32F2F", "#4CAF50"], autopct='%1.1f%%', startangle=90)  # Cores hexadecimais
plt.title('Distribuição por Sexo')
plt.ylabel('')  # Remove o label do eixo y para melhor visualização
plt.show()

# c) Box Plot da variável Lixo Gerado
plt.figure(figsize=(8,6))
sns.boxplot(x=df['Lixo Gerado (Kg)'], color='lightblue')
plt.title('Box Plot do Lixo Gerado')
plt.xlabel('Lixo Gerado')
plt.show()

# # d) Box Plot da variável Lixo Gerado por Grau de Instrução
plt.figure(figsize=(10,6))
sns.boxplot(x='Grau de instrução', y='Lixo Gerado (Kg)', data=df, palette="Set3")
plt.title('Box Plot do Lixo Gerado por Grau de Instrução')
plt.xlabel('Grau de Instrução')
plt.ylabel('Lixo Gerado')
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()

# e) Histograma da variável Lixo Gerado
plt.figure(figsize=(8,6))
plt.hist(df['Lixo Gerado (Kg)'], bins=10, color='lightgreen', edgecolor='black')
plt.title('Histograma do Lixo Gerado')
plt.xlabel('Lixo Gerado')
plt.ylabel('Frequência')
plt.show()

# QUESTAO 4------------------------------------------------------------------
# def medidas_dispersaao(serie):
#     variancia = serie.var()
#     desvio_padrao = serie.std()
#     coeficiente_variacao = (desvio_padrao / serie.mean()) * 100
#     return variancia, desvio_padrao, coeficiente_variacao

# # Função para calcular medidas de posição
# def medidas_posicao(serie):
#     media = serie.mean()
#     moda = serie.mode()[0]  # Considerando a moda mais frequente
#     mediana = serie.median()
#     return media, moda, mediana

# # a) Lixo Gerado
# print("Análise da variável Lixo Gerado:")
# lixo_gerado = df['Lixo Gerado (Kg)'].dropna()  # Remove valores NaN
# media, moda, mediana = medidas_posicao(lixo_gerado)
# variancia, desvio_padrao, coeficiente_variacao = medidas_dispersaao(lixo_gerado)

# print(f"Média: {media:.2f}")
# print(f"Moda: {moda:.2f}")
# print(f"Mediana: {mediana:.2f}")
# print(f"Variância: {variancia:.2f}")
# print(f"Desvio Padrão: {desvio_padrao:.2f}")
# print(f"Coeficiente de Variação: {coeficiente_variacao:.2f}%")
# print()

# # b) Idade
# print("Análise da variável Idade:")
# idade = df['Idade'].dropna()  # Remove valores NaN
# media, moda, mediana = medidas_posicao(idade)
# variancia, desvio_padrao, coeficiente_variacao = medidas_dispersaao(idade)

# print(f"Média: {media:.2f}")
# print(f"Moda: {moda:.2f}")
# print(f"Mediana: {mediana:.2f}")
# print(f"Variância: {variancia:.2f}")
# print(f"Desvio Padrão: {desvio_padrao:.2f}")
# print(f"Coeficiente de Variação: {coeficiente_variacao:.2f}%")
# print()

# # c) Nº de pessoas
# print("Análise da variável Nº de pessoas:")
# n_pessoas = df['Pessoas na Famíla'].dropna()  # Remove valores NaN
# media, moda, mediana = medidas_posicao(n_pessoas)
# variancia, desvio_padrao, coeficiente_variacao = medidas_dispersaao(n_pessoas)

# print(f"Média: {media:.2f}")
# print(f"Moda: {moda:.2f}")
# print(f"Mediana: {mediana:.2f}")
# print(f"Variância: {variancia:.2f}")
# print(f"Desvio Padrão: {desvio_padrao:.2f}")
# print(f"Coeficiente de Variação: {coeficiente_variacao:.2f}%")

# QUESTAO 5------------------------------------------------------------------
# media_idade_por_sexo = df.groupby('Sexo')['Idade'].mean().reset_index()

# # Renomear as colunas para melhor clareza
# media_idade_por_sexo.columns = ['Sexo', 'Média da Idade']

# # Exibir o resultado
# print("Média da Idade por Sexo:")
# print(media_idade_por_sexo.to_html(index=False))