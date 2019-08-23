import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import login from './views/login/login'
import demo from './views/text/demo'
import handle from './views/handle/handle'
import heightWeight from "./views/handle/heightWeight/heightWeight";
import TjRegistration from "./views/TjRegistration/TjRegistration";
import bloodPressure from "./views/handle/bloodPressure/bloodPressure"
import bSuper from "./views/handle/bSuper/bSuper"


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/demo',
      name:'demo',
      component:demo
    },
    {
      name:'TjRegistration',
      path:'/TjRegistration',
      component:TjRegistration,
    },
    {
      path:'/handle',
      name:'handle',
      component:handle,
      title:'操作页面',
      children:[
        {
          path: '/heightWeight',
          name: 'heightWeight',
          component:heightWeight
        },
        {
          path: '/bloodPressure',
          name: 'bloodPressure',
          component:bloodPressure
        },
        {
          path: '/bSuper',
          name: 'bSuper',
          component:bSuper
        },

      ]
    }
  ]
})
