import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import All from './module/moduleA'
import { A1 as myA1 } from './module/moduleB'

// 引入element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入 mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(ElementUI)
Vue.use(MintUI)

Vue.config.productionTip = false
console.log(All, myA1)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#box')
