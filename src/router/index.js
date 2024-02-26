import {createRouter, createWebHistory} from 'vue-router'

import ListViews from '../views/ListViews.vue';

import LoginViews from '../views/LoginViews.vue';

const routes = [

//   {
//     path: '/create',
//     name: 'Create',
//     component: CreateViews
//   },
  {
    path: '/list',
    name: 'List',
    component:ListViews
  },
  {
    path: '/login',
    name: 'Login',
    component:LoginViews
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Utilise le mode history pour des URL propres
  routes
});

export default router;
