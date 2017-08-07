import Vue from 'vue'
import Router from 'vue-router'
import homepage from '../components/homepage/homepage.vue'
import dogFood from '../components/dogFood/dogFood.vue'
import specialSale from '../components/specialSale/specialSale.vue'
import newProductVideo from '../components/newProductVideo/newProductVideo.vue'
import newDogClass from '../components/newDogClass/newDogClass.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homepage'
    },
    {
      path: '/homepage',
      component: homepage
    },
    {
      path: '/dogFood',
      component: dogFood
    },
    {
      path: '/specialSale',
      component: specialSale
    },
    {
      path: '/newProductVideo',
      component: newProductVideo
    },
    {
      path: '/newDogClass',
      component: newDogClass
    }
  ]
})
