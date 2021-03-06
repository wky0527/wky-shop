import { defineConfig } from 'vite';
import path from "path";
import reactRefresh from '@vitejs/plugin-react-refresh';
import { viteMockServe } from "vite-plugin-mock";

// function pathResolve(dir:any) {
//   return resolve(process.cwd(), '.', dir)
// }
// https://vitejs.dev/config/
export default defineConfig(({command})=>{
  let prodMock = true;
  console.log(command, command !== 'serve' && prodMock)
  return {
    base: './',
    plugins: [
      reactRefresh(),
      viteMockServe({
        mockPath: 'mock',
        watchFiles: true,
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && prodMock,
        injectCode: `
        import { setupProdMockServer } from '/mock/index.js';
        setupProdMockServer();
      `,
      }),
    ],
    server: {
      host: '0.0.0.0',
      proxy: {
        '/api': {
          target: 'http://10.1.3.15:3002',
          changeOrigin: true,
        }
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
        '@': path.resolve(__dirname,'src') + '/',
        "~/": path.resolve(__dirname,'src') + '/',
      }
    },
    define: {
      'process.env': {},
      'process.platform': null,
      'process.version': null,
    }
  }
})
