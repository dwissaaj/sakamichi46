// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/google-fonts','@nuxtjs/tailwindcss','@nuxt/image-edge','nuxt-icons','nuxt-icon','@nuxtjs/strapi'
        ,'@element-plus/nuxt','nuxt-swiper','@nuxtjs/google-adsense','nuxt-gtag'
    ],
    strapi: {
        url: process.env.STRAPI_URL || 'http://127.0.0.1:1337',
        prefix: '/api',
        version: 'v4',
    },
    image : {
        dir: 'assets/images',
        strapi: {
            baseURL: 'https://bucket-q0ddp1.s3.ap-southeast-1.amazonaws.com/'
        },
        providers: {
            customProvider: {
                name: 'bucket',
                provider: '../customProvider',
                options :{
                    baseURL: 'https://bucket-q0ddp1.s3.ap-southeast-1.amazonaws.com/'
                }
            }
        }
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
    },
    googleFonts: {
        families: {
           Poppins : true,
           Nunito : [300,500],
           Ubuntu : [300,500],
            'Bree+Serif' : true,
            Raleway : [300,500],
            Monospace: [400,700],
             Inconsolata: [400,700],
            Inter : [100,300]
        }
    },
    "google-adsense" : {
        id: 'ca-pub-6939749049118846',

    },
    gtag: {
        id: 'G-HRXCTT3KDM'
    },



})
