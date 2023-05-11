// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/google-fonts","@nuxtjs/tailwindcss","@nuxt/image-edge","nuxt-icons","nuxt-icon"
    ],
    app: {
        head: {
            title: 'Sakamichi',
            meta: [
                {name: ' description', content: 'Sakamichi Fan Site'}
            ],
            link: [
                { rel: 'icon', type: 'images/x-icon', href: '/favicon.ico' }
            ]
        }
    },
    image : {
        dir: 'assets/images',
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
            '2xl': 1536
        }
    },
    googleFonts: {
        families: {
           'Poppins' : true,
           'Nunito' : [300,500]

        }
    }
})
