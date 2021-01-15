import First from '@/views/first/first'
import Welcome from '@/views/first/welcome'
import User from '@/views/1/1-1'
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
    }
  ]
}
