import Vue from 'vue';
import Router from 'vue-router';

import ForgotPassword from '~/pages/forgotPassword';
import Index from '~/pages/index';
import Registration from '~/pages/registration';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Index,
      },
      {
        path: '/esqueci-a-senha',
        component: ForgotPassword,
      },
      {
        path: '/cadastrar',
        component: Registration,
      },
    ],
  });
}
