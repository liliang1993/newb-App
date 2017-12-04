import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Capital from '@/views/capital/homePage'
import Deposit from '@/views/capital/subpage-deposit'

import Account from '@/views/account/homePage'
import TradeSetting from '@/views/account/tradeSetting'
import AboutUs from '@/views/account/aboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'capitalHomePage',
      component:  Capital
    },
    {
      path: '/capital/deposit',
      name: 'deposit',
      component:  Deposit
    },
    {
      path: '/account/tradeSetting',
      name: 'tradeSetting',
      component:  TradeSetting
    },
    {
      path: '/account',
      name: 'account',
      component:  Account
    },
    {
      path: '/account/aboutUs',
      name: 'aboutUs',
      component:  AboutUs
    }
  ]
})
