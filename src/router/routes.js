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
