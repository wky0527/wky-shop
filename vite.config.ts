import { defineConfig } from 'vite';
import path = require('path');
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/style/base.scss";`
      },
    },
    postcss: {
      plugins: [
          // require('autoprefixer'),
      ]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname,'src')
    }
  }
})
