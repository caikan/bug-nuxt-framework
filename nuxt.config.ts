import { defineNuxtConfig } from '@nuxt/bridge'
export default async () => {
  return defineNuxtConfig({
    target: 'static',
    ssr: false,
    build: {
      ssr: false,
    },
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
  })
}
