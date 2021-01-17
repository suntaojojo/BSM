import Vue from 'vue'
import VueRouter from 'vue-router'
import first from '@/router/routers/first'
import login from '@/router/routers/login'

Vue.use(VueRouter)

const routes = [
  login,
  first,
]

const router = new VueRouter({
  routes,
  mode:"history",
})
import store from '@/store/index'
router.beforeEach((to, from, next) => {
  // ...
  let jwt = store.state.global._token
  console.log(to.path , from.path , jwt)
  if(jwt){
    next()
  }else{
    let Path = ['/home']
    if(Path.includes(to.path)){
      router.push('/login')
    }else{
      next()
    }
  }
})


export default router
