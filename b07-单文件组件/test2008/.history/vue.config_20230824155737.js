// vue项目的配置文件覆盖
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false// 暂时关闭代码检测
})
