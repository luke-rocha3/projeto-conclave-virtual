# ✝️ Conclave Virtual - Eleição do Papa

> Um projeto de console interativo que simula o processo de eleição de um novo Papa, desenvolvido como avaliação final para o Módulo 1 do programa **Bolsa Futuro Digital (Softex Pernambuco)**.

---

### 📋 Tabela de Conteúdos
1. [Sobre o Projeto](#-sobre-o-projeto)
2. [Funcionalidades](#-funcionalidades)
3. [Objetivos de Aprendizagem](#-objetivos-de-aprendizagem)
4. [Como Executar](#-como-executar)
5. [Exemplo de Uso](#-exemplo-de-uso)
6. [Autor](#-autor)

---

### 📖 Sobre o Projeto

Este projeto é uma simulação em modo texto do conclave, o processo pelo qual os cardeais da Igreja Católica elegem um novo Papa. A aplicação gerencia o cadastro dos candidatos e conduz rodadas de votação até que um deles alcance a maioria qualificada de **dois terços dos votos**, momento em que é anunciado com a famosa saudação "Habemus Papam!".

### ✨ Funcionalidades

- **👨‍⚖️ Cadastro de Cardeais:** Permite o registro de 5 cardeais com nomes e IDs automáticos.
- **🗳️ Votação Secreta:** Conduz rodadas de votação onde 5 eleitores escolhem seus candidatos.
- **📜 Menu Interativo:** Exibe um menu claro e simples para a seleção dos candidatos a cada voto.
- **⚖️ Regra de Eleição:** Valida se um candidato atingiu o mínimo de 4 votos (2/3 de 5) para ser eleito.
- **🔄 Múltiplas Rodadas:** Inicia novas rodadas de votação automaticamente se não houver um vencedor.
- **🎉 Anúncio do Vencedor:** Celebra a eleição com a mensagem "Habemus Papam!".

### 🎯 Objetivos de Aprendizagem

O desenvolvimento deste projeto visou aplicar e consolidar os seguintes conceitos fundamentais de programação:

- Vetores (Arrays) para armazenar dados.
- Laços de Repetição (`for`, `while`) para controle de fluxo.
- Contadores e Acumuladores para apurar os votos.
- Estruturas de Decisão (`if`/`else`) para validar as regras.
- Entrada e Saída de Dados no terminal.
- Menus e Lógica Condicional para interação com o usuário.

---

### 🚀 Como Executar

Para rodar este projeto em sua máquina, siga os passos abaixo.

#### **1. Pré-requisitos**

É necessário ter o **Node.js** instalado. (Recomenda-se a versão 16 ou superior).

#### **2. Instalação**

Clone o repositório e acesse a pasta do projeto:

```sh
# Clone o repositório
git clone [https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git](https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git)

# Entre no diretório
cd NOME_DO_REPOSITORIO
```

#### **3. Execução**

Para iniciar a simulação, execute o seguinte comando no seu terminal:

```sh
node conclave.js
```

O programa iniciará e guiará você pelo processo de cadastro e votação.

### 💻 Exemplo de Uso

```console
$ node conclave.js
=== CONCLAVE VIRTUAL - ELEIÇÃO DO PAPA ===

--- Fase de Cadastro dos Cardeais ---
Digite o nome do cardeal #1: Angelo
Digite o nome do cardeal #2: Pietro
(...)

✅ Cadastro concluído! Todos os 5 cardeais foram registrados.

--- O Conclave foi iniciado. A votação secreta começará agora! ---

--- Rodada de Votação #1 ---
(...)
Digite o número do seu candidato: 5
Voto computado com sucesso!
```

---

### 👤 Autor

- **Nome:** 
Lucas Gabriel
- **GitHub:** [@luke-rocha3](https://github.com/luke-rocha3)

Projeto desenvolvido no contexto do programa Bolsa Futuro Digital.
