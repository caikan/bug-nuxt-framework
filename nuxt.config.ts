import { defineNuxtConfig } from '@nuxt/bridge'
import extractorPug from '@unocss/extractor-pug'
import { extractorSplit } from '@unocss/core'
export default async () => {
  return defineNuxtConfig({
    target: 'static',
    ssr: false,
    bridge: {
      // -- Opt-in features --
      // Use Vite as the bundler instead of Webpack 4
      vite: !true,
      // Enable Nuxt 3 compatible useMeta
      meta: true,
      // -- Default features --
      // Use legacy server instead of Nitro
      // nitro: false,
      // Disable nuxt 3 compatible `nuxtApp` interface
      // app: false,
      // Disable composition API support
      // capi: false,
      // Do not transpile modules
      // transpile: false,
      // Disable <script setup> support
      // scriptSetup: false,
      // Disable composables auto importing
      // autoImports: false,
      // Do not warn about module incompatibilities
      // constraints: false
    },
    vite: {
      // Config for Vite
    },
    components: true,
    buildModules: [
      '@unocss/nuxt',
    ],
    unocss: {
      uno: true, // enabled `@unocss/preset-uno`
      icons: true, // enabled `@unocss/preset-icons`
      attributify: true, // enabled `@unocss/preset-attributify`,    
      shortcuts: [
        [/^hover-(.+)$/i, ([, c]) => `hover:${c}`],
        [/^important-(.+)$/i, ([, c]) => `!${c}`],
        [/^(.+)-c-((?:[0-9a-f]{3,4}){1,2})$/i, ([, p, c]) => `${p}-#${c}`],
      ],
      extractors: [
        //
        extractorPug(),
        extractorSplit,
      ],
    },
  })
}
