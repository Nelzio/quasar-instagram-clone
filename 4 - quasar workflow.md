# Quasar Framework

## Como apresentar uma página usando quasar

Para apresentar uma página usando quasar precisamos passar de Layouts, pages e router.

### Layouts

Os layouts são componentes que definem a estrutura geral da aplicação, como cabeçalho, rodapé, etc.

Para criar um layout, crie um arquivo `.vue` dentro da pasta `layouts/` (Ao criar o projeto, o Quasar cria um layout padrão chamado `MainLayout.vue`).

```html
<template>
  <!-- q-layout é um componente do Quasar que define a estrutura da página. -->
  <q-layout>
    <!-- q-header é um componente do Quasar que define o cabeçalho da página. -->
    <q-header class="bg-white text-black">
      <!-- q-toolbar é um componente do Quasar que define a barra de ferramentas do cabeçalho. -->
      <q-toolbar>
        <!-- q-toolbar-title é um componente do Quasar que define o título da barra de ferramentas. -->
        <q-toolbar-title>
          <!-- title é uma variável que contém o título da página. -->
          <!-- Em Vue.js quando queremos exibir uma variável no HTML, usamos {{ variavel }} -->
          <!-- Variáveis devem estar contidas dentro de um object que é retornado pelo método data() ou setup() -->
          {{ title }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- q-page-container é um componente do Quasar que define o conteúdo da página. -->
    <q-page-container>
      <!-- router-view é um componente do Vue Router que exibe o componente da página atual. -->
      <!-- Em Quasar as páginas são mapeadas para rotas no arquivo router/routes.js -->
      <!-- Páginas são componentes Vue que constam na pasta pages e em rotas são children de um layout -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Instagram Clone'
      }
    }
  }
</script>
```

### Pages

As páginas são componentes de página que são mapeados para rotas.
Basicamente é nas páginas que o conteúdo da aplicação é exibido. Podemos considerar as páginas como as "telas" da aplicação, (Main do body se fosse HTML).

Para criar uma página, crie um arquivo `.vue` dentro da pasta `pages/`.

```html
<template>
  <q-page>
    <!-- instagram card -->
    <!-- q-card é um componente do Quasar que define um cartão. -->
    <q-card bordered>
      <!-- q-card-section é um componente do Quasar que define uma seção do cartão. -->
      <q-card-section>
        <!-- confome vê. Podemos usar em quasar elementos HTML e componentes do Quasar. Neste caso temos uma div com uma imagem e outros elementos do HTML e Quasar -->
        <div class="row items-center">
          <!-- q-avatar é um componente do Quasar que define um avatar. Vai ser a imagem do utilizador -->
          <q-avatar
            size="50px"
            color="teal-9"
            text-color="white"
            icon="person"
          />
          <!-- div com o nome do utilizador e a data do post -->
          <div class="q-ml-md">
            <div class="text-h6">Nome do usuário</div>
            <div class="text-caption">Há 1 hora</div>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <!-- q-img é um componente do Quasar que define uma imagem. -->
        <!-- a imagem para este caso está no diretório assets/images/instagram-post.jpg -->
        <q-img
          src="~assets/images/instagram-post.jpg"
          alt="Imagem do post"
          class="full-width"
        />
      </q-card-section>
      <q-card-section>
        <!-- q-space é um componente do Quasar que define um espaço. -->
        <q-space />
        <div class="text-h6">Descrição do post</div>
        <q-space />
      </q-card-section>
      <q-card-actions align="left">
        <!-- q-btn é um componente do Quasar que define um botão. -->
        <!-- Os botões em quasar possuem várias propriedades que podem ser usadas para personalizar o botão. -->
        <!-- round: deixa o botão redondo -->
        <!-- flat: deixa o botão sem sombra -->
        <!-- icon: define o ícone do botão -->
        <!-- Na documentação do Quasar podemos ver todas as propriedades que um botão pode ter. https://quasar.dev/vue-components/button/ -->
        <q-btn round flat icon="favorite_border" />
        <q-btn round flat icon="comment" />
        <q-btn round flat icon="share" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
  // O defineComponent é uma função do Vue que define um componente Vue.
  import { defineComponent } from 'vue';

  // export default é usado para exportar o componente Vue para ser usado em outros arquivos.
  export default defineComponent({
    name: 'IndexPage' // nome do componente
  });
</script>
```


### Router

O `router` é o que mapeia as rotas da aplicação. Ele é responsável por direcionar o utilizador para a página correta quando ele acessa uma URL específica.

Para configurar o `router`, abra o arquivo `router/routes.js` e adicione as rotas da aplicação.

Por 'default' o Quasar cria um arquivo `router/routes.js` com uma rota padrão já configurada e para o nosso caso já temos o layout `MainLayout.vue` e a página `IndexPage.vue` configurados.

```javascript
/*
A lista `routes` contém todas as rotas da aplicação.
* Cada rota é um objeto com as seguintes propriedades:
* path: O caminho da rota.
* component: O componente Vue que será exibido quando a rota for acessada. No caso temos MainLayout.vue e IndexPage.vue.
* children é um array de objetos de rota que são mapeados para rotas filhas. Os componentes em children são injetados no componente pai pelo componente router-view.
*/
const routes = [
  {
    // path: O caminho da rota.
    path: '/',
    // component: O componente Vue que será exibido quando a rota for acessada.
    component: () => import('layouts/MainLayout.vue'),
    // children é um array de objetos de rota que são mapeados para rotas filhas.
    children: [
      // path da rota filha é acrescentado ao path da rota pai.
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
```

Esta é a base do Quasar 'Framework', com estas configurações podemos apresentar uma página usando Quasar.
É possível explorar mais consoante as necessidades da aplicação e do desenvolvedor.



[<img src="https://img.shields.io/badge/Back-blue" alt="Back" style="vertical-align:middle;">](3%20-%20template%20vue.md)
