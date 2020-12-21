import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Film from '@/views/Film'
import Nowplaying from '@/views/Film/Nowplaying'
import Comingsoon from '@/views/Film/Comingsoon'
import Cinema from '@/views/Cinema'
import Center from '@/views/Center'
import Detail from '@/views/Detail'
import Login from '@/views/Login'
import City from '@/views/City'

Vue.use(VueRouter)

// const auth = {
//   isLogin () {
//     return false
//   }
// }
const routes = [
  {
    path: '/film',
    component: Film,
    children: [
      {
        path: '/film/nowplaying',
        component: Nowplaying
      },
      {
        path: 'comingsoon',
        component: Comingsoon
      },
      {
        path: '',
        redirect: '/film/nowplaying'
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/detail/:id', // /detail/aa 动态路由
    name: 'kerwindetail',
    component: Detail
  },
  {
    path: '*',
    redirect: '/film'
  }
]

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})

// 全局守卫
// router.beforeEach((to, from, next) => {
//   // console.log(to)
//   if (to.path === '/center') {
//     console.log('盘查')

//     if (auth.isLogin()) {
//       next()
//     } else {
//       next('/Login')
//     }
//   } else {
//     next()
//   }
// })
export default router
