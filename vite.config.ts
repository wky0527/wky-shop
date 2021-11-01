import { defineConfig } from 'vite';
import {resolve} from "path";
import reactRefresh from '@vitejs/plugin-react-refresh'
function pathResolve(dir:any) {
  return resolve(process.cwd(), '.', dir)
}
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
      '@': pathResolve('src') + '/',
      "~/": pathResolve('src') + '/',
    }
  }
})
