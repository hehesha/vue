import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'



import Vuex from 'vuex'
//zby:为了在全局环境中使用vue
window.Vue = Vue;


import sell from './components/sell.vue';
import my from './components/my/my.vue';
import buy from './components/buy/buy.vue';
import howToSell from'./components/sell/howToSell.vue';

//zby：引入Muse-Ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

//zby:使用轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper)


Vue.use(VueRouter);

var router  = new VueRouter({
  routes:[
    {path:'/sell',component:sell},
    {path:'/howtosell',component:howToSell},
    {path:'/my',component:my},
    {path:'/buy',component:buy},
    {path:'/update',component:{}},
    {path:'/sifts',component:{}}
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
