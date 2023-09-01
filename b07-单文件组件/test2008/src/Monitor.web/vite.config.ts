import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

//import Autolmport from 'unplugin-auto-import/vite'
/////import Components from 'unplugin-vue-components/vite'
//import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

//import { defineConfig } from 'vite'
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(),

    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),

    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],



  server: {
    port: 3000,
    open: true, //自动打开
    base: "./ ", //生产环境路径
    proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      // 正则表达式写法
      '^/api': {
        target: 'http://localhost:5219/', // 后端服务实际地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }

  // server: {
  //   open: true,
   
  //   // proxy:{
  //   //   '/api':{
  //   //     target:"http://127.0.0.1:5219/api",
  //   //     changeOrigin:true,
  //   //     rewrite:(path)=>path.replace(/^\/api/,'')
  //   //   }
  //   //

  //   // proxy: {
  //   //   '/api/': {
  //   //     target: 'http://127.0.0.1:8088',
  //   //     changeOrigin: true,
  //   //     pathRewrite: {
  //   //       '^/api': ''
  //   //     }
  //   //   }


  // },

});

// export default defineConfig({
//   plugins: [
//   vue(),
//   Autolmport({
//     resolvers:[ElementPlusResolver()],
//   }),
//   Components({
//     resolvers:[ElementPlusResolver()],
//   }),
//   ],
//   server:{
//      open:true
//   }
// })
