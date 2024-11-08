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
