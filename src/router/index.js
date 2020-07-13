import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/components/login.vue'
import contact from '@/components/Contact.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes :[
    {
      path: '/Connexion',
      name: 'Connexion',
      component: login
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: contact
    },
    // {
    //   // path: '/about',
    //   // name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
  ]
})

export default router
