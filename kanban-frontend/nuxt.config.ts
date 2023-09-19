// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/apollo'
  ], 
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'cookies'
  }, 
  build: {
    transpile: ['pinia-plugin-persistedstate']
  },    
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.KANBANDATA_URL,
      }
    },
  }, 
  runtimeConfig: {
    NUXT_SECRET: process.env.NUXT_SECRET,
    BACK4APP_URL: process.env.BACK4APP_URL,
    BACK4APP_APPID: process.env.BACK4APP_APPID,
    BACK4APP_RESTAPIKEY: process.env.BACK4APP_RESTAPIKEY,
    public: {
      KANBANDATA_URL: process.env.KANBANDATA_URL
    }
  },
  vite: {
    server: {
      hmr: {
        protocol: 'ws',
        host: 'localhost'
      }
    }
  } 
})
