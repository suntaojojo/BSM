import First from '@/views/first/first'
import Welcome from '@/views/first/welcome'
import User from '@/views/1/1-1'
import Right from '@/views/2/2-1'
import Role from '@/views/2/2-2'
import Cart from '@/views/3/3-3'
import Params from '@/views/3/3-2'
export default {
  path:'/home',
  component:First,
  redirect:'/welcome',
  children:[
    {
      path:'/welcome' ,
      component:Welcome
    },
    {
      path:'/1-1',
      component:User
    },
    {
      path:'/2-1',
      component:Right
    },
    {
      path:'/2-2',
      component:Role
    },
    {
      path:'/3-3',
      component:Cart
    },
    {
      path:'/3-2',
      component:Params
    }
  ]
}
