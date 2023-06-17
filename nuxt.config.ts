// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/google-fonts','@nuxtjs/tailwindcss','@nuxt/image-edge','nuxt-icons','nuxt-icon','@nuxtjs/strapi'
        ,'@element-plus/nuxt','nuxt-swiper','nuxt-gtag','@nuxtjs/google-adsense'
    ],
    strapi: {
        url: process.env.STRAPI_URL ,
        prefix: '/api',
        version: 'v4',
    },
    image : {
        dir: 'assets/images',
        providers: {
            customProvider: {
                name: 'bucket',
                provider: '../customProvider',
                options :{
                    // baseURL: 'https://bucket-q0ddp1.s3.ap-southeast-1.amazonaws.com/',
                    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
                    AWS_ACCESS_SECRET: process.env.AWS_ACCESS_SECRET,
                    AWS_REGION: process.env.AWS_REGION,
                    AWS_BUCKET: process.env.AWS_BUCKET
                }
            }
        },
    
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
    },
    googleFonts: {
        families: {
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
