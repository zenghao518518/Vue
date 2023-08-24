import Vue from 'vue' // ES6 导入
import App from './App.vue'
// import router from './router'
// import store from './store'

Vue.config.productionTip = false

new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount('#app')

var obj={
  name:"zenghao",
  age:100
}