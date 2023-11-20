import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
