import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginPages from 'vite-plugin-pages';
import VitePluginVue from '@vitejs/plugin-vue';
import VitePluginGhPages from 'vite-plugin-gh-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // VitePluginPages(),
    // VitePluginVue(),
    // VitePluginGhPages()
  ],
  base: '/techub/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import './src/scss/reset.scss';
          @import './src/scss/color.scss';
          @import './src/scss/common.scss';
         
        `,
        // additionalData: `@import './src/scss/common.scss';`,
      },
    },
  },
})
