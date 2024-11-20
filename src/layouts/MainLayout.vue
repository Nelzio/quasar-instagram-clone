<template>
  <!-- q-layout é um componente do Quasar que define a estrutura da página. -->
  <q-layout>
    <!-- q-header é um componente do Quasar que define o cabeçalho da página. -->
    <q-header class="bg-white text-black" elevated>
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
