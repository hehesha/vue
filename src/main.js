import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
//zby全局使用axios
Vue.prototype.$axios = axios ;


import Vuex from 'vuex'
//zby:为了在全局环境中使用vue
window.Vue = Vue;


import sell from './components/sell.vue'
import my from './components/my/my.vue'
import sifts from './components/buy/sifts/sifts.vue'
import buy from './components/buy/buy.vue';
import message from './components/message/message.vue';
import howToSell from'./components/sell/howToSell.vue';
import search from './components/search/search.vue';
import news from './components/sell/news.vue';
import detail from'./components/buy/detail/detail.vue';
import car from './components/car/car.vue';



//zby：引入Muse-Ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)


// cls引入mint-ui
import { Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use({ Swipe, SwipeItem });
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//zby引入jquery
import $ from "jquery";
window.$ = window.jQuery = $ ;


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
    {path:'/sifts',component:{}},
    {path:'/message',component:message},
    {path:'/search',component:search},
    {path:'/news',component:news},
    {path:'/sifts',component:sifts},
    {path:'/detail',component:detail},
    {path:'/car',component:car}
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})








