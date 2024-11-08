# Quasar Framework

## Introdução
Quasar Framework é um framework frontend baseado em Vue.js que permite criar aplicações responsivas e de alta performance, utilizando uma única base de código. Ele suporta a criação de aplicações para web, mobile e desktop.

## Estrutura do Projeto

A estrutura básica de um projeto Quasar é a seguinte:

```
instagram-clone/
├── public
├── src
│   ├── assets
│   ├── boot
│   ├── components
│   ├── css
│   ├── i18n
│   ├── layouts
│   ├── pages
│   ├── router
│   ├── store
│   ├── App.vue
│   └── index.template.html
├── babel.config.cjs
├── jsconfig.json
├── package.json
├── package-lock.json
├── postcss.config.cjs
├── quasar.config.js
└── README.md
```

Explicação de cada parte da estrutura do projeto `instagram-clone`:

- `public/`: Contém arquivos estáticos que serão servidos diretamente, como `index.html`, ícones, e outros recursos públicos. Dificilmente iremos modificar arquivos nesta pasta.

- `src/`: Diretório principal do código-fonte da aplicação.
  - `assets/`: Armazena recursos estáticos como imagens, fontes, etc.
  - `boot/`: Contém arquivos de inicialização que são executados antes da criação da instância principal do Vue. No caso da nossa aplicação iremos executar no boot o `axios` para fazer requisições HTTP e o `i18n` para suporte a múltiplos idiomas.
  - `components/`: Contém componentes Vue reutilizáveis. Podemos usar o mesmo componente em várias partes da aplicação.
  - `css/`: Contém arquivos CSS globais.
  - `i18n/`: Contém arquivos de internacionalização para suporte a múltiplos idiomas.
  - `layouts/`: Contém layouts de página que definem a estrutura geral da aplicação como cabeçalho, rodapé, etc.
  - `pages/`: Contém componentes de página que são mapeados para rotas.
  - `router/`: Contém a configuração das rotas da aplicação.
  - `store/`: Contém a configuração do Vuex para gerenciamento de estado. Onde podemos guardar informações que precisam ser compartilhadas entre componentes.
  - `App.vue`: Componente raiz da aplicação.
  - `index.template.html`: Template HTML principal usado pelo Quasar.

- `babel.config.cjs`: Configuração do Babel para transpilar o código JavaScript. Dificilmente iremos modificar este arquivo.

- `jsconfig.json`: Arquivo de configuração para o editor de código, ajudando com a resolução de caminhos e sugestões de código. Dificilmente iremos modificar este arquivo.

- `package.json`: Contém metadados do projeto e dependências do npm. Dificilmente iremos modificar este arquivo, não tanto quanto os outros.

- `package-lock.json`: Arquivo gerado automaticamente que descreve a árvore de dependências exata instalada.

- `postcss.config.cjs`: Configuração do PostCSS para processamento de CSS.

- `quasar.config.js`: Configuração do Quasar Framework.

- `README.md`: Arquivo de documentação do projeto, geralmente contendo instruções de uso e informações gerais.


## Componentes vue do Quasar
Antes precisamos entender o que são componentes Vue.
Componentes Vue são blocos reutilizáveis que podem ser usados para construir
interfaces do utilizador. Eles são compostos por três partes principais: `template`, `script` e `style`.

O código Vue.js é escrito em arquivos `.vue` que contêm o código HTML, JavaScript e CSS

exemplo de template vue:
```html
<!-- Todo o HTML deve estar dentro do bloco `template` -->
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>
<script>
  // Todo o JavaScript deve estar dentro do bloco `script`
  // O bloco export default é usado para exportar o componente Vue para ser usado em outros arquivos
export default {
  // O bloco data é usado para definir os dados que o componente irá usar
  data() {
    // O método data deve retornar um objeto com os dados que o componente irá usar
    return {
      message: 'Ola Coding Girls!'
    }
  }
}
</script>
<style>
/* Todo o CSS deve estar dentro do bloco `style` */
h1 {
  color: red;
}
</style>
```

[<img src="https://img.shields.io/badge/Back-blue" alt="Back" style="vertical-align:middle;">](1%20-%20Inicializacao.md)
[<img src="https://img.shields.io/badge/Next-blue" alt="Next" style="vertical-align:middle;">](3%20-%20template%20vue.md)

