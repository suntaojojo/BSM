import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/global.css'
import axios from '@/api/http'
import {Message , MessageBox} from 'element-ui'
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
Vue.prototype.$http = axios
Vue.config.productionTip = false

let jwt = window.localStorage.getItem('_token')
if(jwt){
  store.commit('global/setJwt' , jwt)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
