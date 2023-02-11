import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import naiveUI from "@/plugins/naiveUI"
// reset css
import '@/assets/style/reset.css'
// // 通用字体
// import 'vfonts/Lato.css'
// // 等宽字体
// import 'vfonts/FiraCode.css'

import {
    // create naive ui
    create,
    // component
    NButton
} from 'naive-ui'

// 拆分配置
const app = createApp(App)

// 注册全局组件库
app.use(naiveUI)

// 注册路由和vuex
app.use(router).use(store)
// 挂载到节点
app.mount('#app')
