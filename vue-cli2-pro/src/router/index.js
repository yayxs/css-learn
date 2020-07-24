import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/components/Home')
const Users = ()=>import('@/components/Users')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    }
  ]
})
