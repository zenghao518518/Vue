import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import   router  from './router/index'
import {createPinia} from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import 'element-plus/dist/index.css'


const app =createApp(App)

for(const [key,component] of Object.entries(ElementPlusIconsVue)){
    app.component(key,component)
}
app.use(createPinia().use(piniaPluginPersist))
app.use(router)
app.mount('#app')

//createApp(App).mount('#app')
