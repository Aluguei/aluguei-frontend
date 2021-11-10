import Vue from 'vue'
import Router from 'vue-router'

import ForgotPassword from '~/pages/forgotPassword'
import Main from '~/pages/main'
import Register from '~/pages/register'
import Login from '~/pages/login'
import ProductDetails from '~/pages/productDetails'
import ProductAdvertise from '~/pages/productAdvertise'
import ContactUs from '~/pages/contact'
import AboutUs from '~/pages/about'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Main
      },
      {
        path: '/login',
        component: Login
      },
      {
        path: '/esqueci-a-senha',
        component: ForgotPassword
      },
      {
        path: '/cadastrar',
        component: Register
      },
      {
        path: '/detalhes-produto/:id',
        component: ProductDetails
      },
      {
        path: '/anunciar-produto',
        component: ProductAdvertise
      },
      {
        path: '/fale-conosco',
        component: ContactUs
      },
      {
        path: '/sobre-nos',
        component: AboutUs
      }
    ]
  })
}
