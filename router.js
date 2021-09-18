import Vue from 'vue';
import Router from 'vue-router';

import ForgotPassword from '~/pages/forgotPassword';
import Main from '~/pages/main';
import Registration from '~/pages/registration';
import Login from '~/pages/login';
import Product from '~/pages/product'

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Main,
      },
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/esqueci-a-senha',
        component: ForgotPassword,
      },
      {
        path: '/cadastrar',
        component: Registration,
      },
      {
        path: '/produto',
        component: Product,
      },
    ],
  });
}
