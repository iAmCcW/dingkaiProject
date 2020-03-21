import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import CarouselTable from '@/views/CarouselTable'
import Echarts from '@/views/Echarts'
import FormView from '@/views/FormView'
import BulletinBoard from '@/views/BulletinBoard'
import Membrank from '@/views/Membrank'
import Register from '@/views/Register'
import Money from '@/views/Money'
import ExchangeDiscount from '@/views/ExchangeDiscount'
import Login from '@/views/Login'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          redirect: '/CarouselTable'
        },
        {
          path: '/CarouselTable',
          component: CarouselTable
        },
        {
          path: '/Echarts',
          component: Echarts
        },
        {
          path: '/FormView',
          component: FormView
        },
        {
          path: '/BulletinBoard',
          component: BulletinBoard
        },
        {
          path: '/Membrank',
          component: Membrank
        },
        {
          path: '/Register',
          component: Register
        },
        {
          path: '/Money',
          component: Money
        },
        {
          path: '/ExchangeDiscount',
          component: ExchangeDiscount
        },
        { path: '/Login',
          component: Login
        }
      ]
    }
  ]
})
