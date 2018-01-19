import Vue from 'vue'
import VueRouter from 'vue-router'

import container from '../components/container/container.vue';

var router = new VueRouter({
    routes:[
      {path:'/container',component:container}
    ]
  })

  export default router;