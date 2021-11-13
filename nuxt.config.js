export default {
  head: {
    titleTemplate: '%s ',
    title: 'Aluguei',
    htmlAttrs: {
      lang: 'pt'
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
      }
    ]
  },

  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 500, 700, 900],
      'Josefin+Sans': true,
      'Noto+Sans+JP': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      }
    }
  },
  css: ['~/assets/scss/all.scss'],
  plugins: [],
  components: {
    dirs: [
      '~/components',
      '~/components/Products',
      '~/components/404',
      '~/components/Categories',
      '~/components/Dialog',
      '~/components/ForgotPassword',
      '~/components/Layout',
      '~/components/Menu',
      '~/components/Products',
      '~/components/SignIn',
      '~/components/SignUp',
      '~/components/Banner',
      '~/components/Search'
    ]
  },
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/google-fonts',
    '@nuxtjs/svg',
    '@nuxtjs/router'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/proxy',
    '@nuxt/http'
  ],

  axios: {
    credentials: true,
    baseURL: 'https://aluguei-backend.herokuapp.com/',
    proxy: true
  },

  proxy: {
    '/api': 'https://aluguei-backend.herokuapp.com/'
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'accessToken',
          global: true,
          required: true,
          type: 'Bearer'
        },
        user: {
          property: false,
          autoFetch: true
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          register: { url: '/api/auth/register', method: 'post' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: {
            url: '/api/auth/me',
            method: 'get',
            headers: { device: 'mobile' },
            propertyName: false
          },
          forgotPassword: {
            url: '/api/auth/request-reset-password',
            method: 'post'
          },
          resetPassword: { url: '/api/auth/reset-password', method: 'put' },
          productsAvailable: { url: '/api/products/available', method: 'get' },
          productsOwned: { url: '/api/products/owned', method: 'get' },
          products: { url: '/api/products/', method: 'get' }
        }
      }
    }
  },

  env: {
    baseUrl: process.env.BASE_URL || 'https://aluguei-backend.herokuapp.com/'
  }
}
