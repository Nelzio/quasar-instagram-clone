# Instagram Clone para Coding Girls

Construindo um clone do Instagram



## Install the dependencies

Para iniciar um projecto com o Quasar, é necessário executar o seguinte comando no seu terminal:

```bash
# Instalar o Quasar CLI globalmente
npm install -g @quasar/cli

# Iniciar um projecto com o Quasar
npm int quasar
```

Após correr o `npm init quasar`, irá visualizar o seguinte:


```bash
 .d88888b.
d88P" "Y88b
888     888
888     888 888  888  8888b.  .d8888b   8888b.  888d888
888     888 888  888     "88b 88K          "88b 888P"
888 Y8b 888 888  888 .d888888 "Y8888b. .d888888 888
Y88b.Y8b88P Y88b 888 888  888      X88 888  888 888
 "Y888888"   "Y88888 "Y888888  88888P' "Y888888 888
    Y8b

? What would you like to build? › - Use arrow-keys. Return to submit.
❯   App with Quasar CLI, let's go! - spa/pwa/ssr/bex/electron/capacitor/cordova
    AppExtension (AE) for Quasar CLI
    Quasar UI kit
```

Selecione a primeira opção, `App with Quasar CLI, let's go! - spa/pwa/ssr/bex/electron/capacitor/cordova` e pressione `Enter`.

Depois disso, irá visualizar o seguinte:
```bash
? Project folder: instagram-clone
```
Atribua um nome ao seu projecto e pressione `Enter`.

Em seguida selecione a versão do Quasar que deseja utilizar. Nestes exemplos, iremos utilizar a versão 2 do Quasar com a Vue 3:
```bash
? Pick Quasar version: › - Use arrow-keys. Return to submit.
❯   Quasar v2 (Vue 3 | latest and greatest) - recommended
    Quasar v1 (Vue 2)
```

Em seguida selecione JavaScript como a linguagem de programação:
```bash
? Pick script type: › - Use arrow-keys. Return to submit.
❯   Javascript
    Typescript
```

Selecione a variante do Quasar CLI com Webpack estável:
```bash
? Pick Quasar App CLI variant: › - Use arrow-keys. Return to submit.
    Quasar App CLI with Vite 2 (stable | v1)
    Quasar App CLI with Vite 5 (BETA | next major version - v2)
❯   Quasar App CLI with Webpack (stable | v3)
    Quasar App CLI with Webpack (BETA | next major version - v4)
```

Adicione um nome ao pacote do seu projecto:
```bash
? Package name: › instagram-clone
```

Forneça uma project product name:
```bash
? Project product name: (must start with letter if building mobile apps) › Instagram Clone
```

Depois forneça uma descrição para o seu projecto:
```bash
? Project description: › Instagram clone for Coding Girls
```

Adicione o autor do projecto:
```bash
? Author: › Nelzio <nelziositoe@gmail.com>
```

Selecione Composition API como estilo de componentes Vue:
```bash
? Pick a Vue component style: › - Use arrow-keys. Return to submit.
    Composition API with <script setup>
❯   Composition API - recommended
    Options API
```

Seleccione None para CSS pre-processors:
```bash
? Pick your CSS preprocessor: › - Use arrow-keys. Return to submit.
    Sass with SCSS syntax
    Sass with indented syntax
❯   None (the others will still be available)
```

Para funcionalidades adicionais, selecione Vuex, axios e vue-i18n como opções:
```bash
? Check the features needed for your project: ›
Instructions:
    ↑/↓: Highlight option
    ←/→/[space]: Toggle selection
    a: Toggle all
    enter/return: Complete answer
◯   Linting (ESLint)
◯   State Management (Pinia)
◉   State Management (Vuex) [DEPRECATED by Vue Team]
◉   axios
◉   vue-i18n
```

Depois dos passos anteriores, o Quasar irá prepara o seu projecto e pedir para você instalar as dependências do projecto:
```bash
? Install project dependencies? (recommended) › - Use arrow-keys. Return to submit.
❯   Yes, use npm
    No, I will handle that myself
```
Como iniciamos com npm, selecione a primeira opção e pressione `Enter`.

Depois espere enquanto as dependências são instaladas.

Depois da instalacão das dependências, você pode iniciar o seu projecto com o seguinte comando:
```bash
# entrar na pasta do seu projecto pelo terminal ou abrindo a pasta no seu editor de código
cd instagram-clone
quasar dev
```

Logo de seguida irá visualizar o seguinte:
```bash
App •  READY  • Compiled: "UI"

 » App dir................... /home/nelzio/CodingGR/ciclo4/instagram-clone
 » App URL................... http://localhost:8080
                              http://192.168.56.245:8080
                              http://172.19.0.1:8080
 » Dev mode.................. spa
 » Pkg quasar................ v2.17.1
 » Pkg @quasar/app-webpack... v3.14.2
 » Transpiled JS............. yes (Babel)

 App • Opening default browser at http://localhost:8080
```

Isso indica que o servidor do seu projecto está a correr e pode aceder ao seu projecto através do link fornecido e no meu caso foi: `http://localhost:8080`.

[<img src="https://img.shields.io/badge/Next-blue" alt="Next" style="vertical-align:middle;">](2%20-%20introducao.md)
