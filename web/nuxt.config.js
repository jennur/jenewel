
module.exports = {
  /*
  ** Router
  */
  pageTransition: {
    name: "page",
    mode: "",
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', to: '/favicon.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/sanity/module',
    '@nuxtjs/apollo'
  ],
  styleResources: {
    scss: ['./assets/css/settings/variables.scss']
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://2mpgois7.apicdn.sanity.io/v1/graphql/production/default',
      }
    }
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-svg-loader',
    'nuxt-fontawesome'
  ],
  fontawesome: {
    component: "fa",
    imports: [
      {
        set: "@fortawesome/free-brands-svg-icons",
        icons: ["faInstagram"]
      },
      {
        set: "@fortawesome/free-regular-svg-icons",
        icons: ["faEnvelope"]
      },
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["faPlus"]
      }
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
  }
}
