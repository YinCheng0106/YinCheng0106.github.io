// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ["/", "/blog"],
    },
  },
  ogImage: {
    fonts: [
      'Noto+Sans+SC:400'
    ]
  },
  site: {
    url: process.env.NUXT_SITE_URL,
    name: 'YinCheng',
  },
  modulesDir: ['../../node_modules'],
  content: {
    build:{
      markdown: {
        highlight:{
          theme: 'github-dark',
        }
      },
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'zh-Hant'
      },
      charset: 'utf-8'
    }
  },
  colorMode: {
    preference: 'dark',
    classSuffix: ''
  },
  icon: {
    serverBundle: {
      collections: ['uil', 'mdi', 'bi']
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/seo',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/mdc',
    '@vueuse/motion/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
  ],
})