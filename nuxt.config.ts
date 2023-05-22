// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/google-fonts","@nuxtjs/tailwindcss","@nuxt/image-edge","nuxt-icons","nuxt-icon","@nuxtjs/strapi"
        ,'@element-plus/nuxt','nuxt-swiper'
    ],
    strapi: {
        url: process.env.STRAPI_URL || 'http://127.0.0.1:1337',
        prefix: '/api',
        version: 'v4',
    },
    image : {
        dir: 'assets/images',
        strapi: {
            baseURL: 'http://localhost:1337/'
        }
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
    },
    googleFonts: {
        families: {
           'Poppins' : true,
           'Nunito' : [300,500],
           'Ubuntu' : [300,500],
            'Bree Serif' : true,
            'Raleway' : [300,500],
            'Monospace': [400,700],
             'Inconsolata': [400,700],
            'Lato' : [400.700],
            'Inter' : [100,300]
        }
    },

})
