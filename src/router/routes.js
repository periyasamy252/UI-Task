
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/homes', component: () => import('pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/login',
    component: () => import('pages/Index.vue')
  },
  {
    path: '/home',
    component: () => import('pages/dashboard.vue')
  },
  {
    path: '/profile',
    component: () => import('pages/Profile.vue')
  }
]

export default routes
