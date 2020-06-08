import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import i18n from './i18n'
import VueRouter from 'vue-router'

import {Home,Facility,Map,BoardSports,BoardFree,BoardTeam,BoardDistrict, Login, Signin, Forgot} from './pages'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes =[
  {
      path: '/home',
      name: 'Home',
      component: Home,
  },
  {
      path: '/facility',
      name: 'Facility',
      component: Facility,
  },
  {
      path: '/map',
      name: 'Map',
      component: Map,
  },
  {
      path: '/boardsports',
      name: 'BoardSports',
      component: BoardSports,
  },
  {
      path: '/boardDistrict',
      name: 'BoardDistrict',
      component: BoardDistrict,
  },
  {
      path: '/boardfree',
      name: 'BoardFree',
      component: BoardFree,
  },
  {
      path: '/boardteam',
      name: 'BoardTeam',
      component: BoardTeam,
  },
  {
   path: '/login',
   name: 'Login',
   component: Login
 },
 {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
   path: '/forgot',
   name: 'Forgot',
   component: Forgot
 }
 ,{ path: '*', redirect: '/home' }
]

const router = new VueRouter({
  routes
});

new Vue({
  vuetify,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
