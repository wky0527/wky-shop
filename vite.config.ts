import { defineConfig } from 'vite';
import {resolve} from "path";
import reactRefresh from '@vitejs/plugin-react-refresh'
function pathResolve(dir:any) {
  return resolve(process.cwd(), '.', dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  base: '/wky-shop/',
  plugins: [reactRefresh()],
  server: {
    proxy: {
      // '/api': {
      //   target: 'http://localhost:3002',
      //   changeOrigin: true
      // }
    }
  },
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
      '@': pathResolve('src') + '/',
      "~/": pathResolve('src') + '/',
    }
  },
  define: {
    'process.env': {},
    'process.platform': null,
    'process.version': null,
  }
})
