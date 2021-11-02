export default {
  target: 'static',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s ',
        title: 'Aluguei',
        htmlAttrs: {
            lang: 'pt',
        },

        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
            },
        ],
    },

    googleFonts: {
        families: {
            Roboto: [100, 300, 400, 500, 700, 900],
            'Josefin+Sans': true,
            'Noto+Sans+JP': true,
            Lato: [100, 300],
            Raleway: {
                wght: [100, 400],
                ital: [100],
            },
        },
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/scss/all.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    // components: true,

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
        ],
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
        '@nuxtjs/google-fonts',
        '@nuxtjs/svg',
        '@nuxtjs/router',
    ],

    // router: {
    //   middleware: ['auth']
    // },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/axios', '@nuxtjs/auth-next', '@nuxtjs/proxy', '@nuxt/http'],

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    // vuetify: {
    //     customVariables: ['~/assets/scss/variables.scss'],
    // },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    axios: {
        credentials: true,
        baseURL: 'https://aluguei-backend.herokuapp.com/',
        proxy: true,
    },

    proxy: {
        // Simple proxy
        '/api': 'https://aluguei-backend.herokuapp.com/',

        // With options
        '/api2': {
            target: 'https://aluguei-backend.herokuapp.com/',
            ws: false
        },

        // Proxy to backend unix socket
        '/api3': {
            changeOrigin: false,
            target: { socketPath: '/var/run/http-sockets/backend.sock' }
        },
    },

    svg: {
        vueSvgLoader: {
            // vue-svg-loader options
        },
        svgSpriteLoader: {
            // svg-sprite-loader options
        },
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
                    user: { url: '/api/auth/me', method: 'get', headers: { 'device': 'mobile' }, propertyName: false },
                    forgotPassword: { url: '/api/auth/request-reset-password', method: 'post' },
                    resetPassword: { url: '/api/auth/reset-password', method: 'put' },
                    productsAvailable: { url: '/api/products/available', method: 'get' },
                    productsOwned: { url: '/api/products/owned', method: 'get' },
                    products: { url: '/api/products/', method: 'get' },
                },
            },
        },
    },

    env: {
        baseUrl: process.env.BASE_URL || 'https://aluguei-backend.herokuapp.com/'
    }
};
