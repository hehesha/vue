import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

import sell from './components/sell/sell.vue'
import my from './components/my/my.vue'
import buy from './components/buy/buy.vue'

Vue.use(VueRouter);

var router  = new VueRouter({
  routes:[
    {path:'/sell',component:sell},
    {path:'/my',component:my},
    {path:'/buy',component:buy}
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
