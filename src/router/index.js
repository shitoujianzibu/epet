import Vue from 'vue'
import Router from 'vue-router'
import homepage from '../components/homepage/homepage.vue'
import dogFood from '../components/dogFood/dogFood.vue'
import specialSale from '../components/specialSale/specialSale.vue'
import newProductVideo from '../components/newProductVideo/newProductVideo.vue'
import newDogClass from '../components/newDogClass/newDogClass.vue'
import shopCart from '../components/shopCart/shopCart.vue'
import about from '../components/about/about.vue'
import client from '../components/client/client.vue'
import login from '../components/login/login.vue'
import dog from '../components/dog/dog.vue'
import indexpage from '../components/indexpage/indexpage.vue'
import classify from '../components/classify/classify.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/dog/indexpage/homepage'
    },
    {
      path: '/dog',
      redirect: '/dog/indexpage/homepage'
    },
    {
      path: '/dog/indexpage',
      redirect: '/dog/indexpage/homepage'
    },
    {
      path: '/dog',
      component: dog,
      children: [
        {
          path: 'indexpage',
          component: indexpage,
          children: [
            {
              path: 'homepage',
              component: homepage
            },
            {
              path: 'dogFood',
              component: dogFood
            },
            {
              path: 'newProductVideo',
              component: newProductVideo
            },
            {
              path: 'newDogClass',
              component: newDogClass
            }
          ]
        },
        {
          path: '/dog/indexpage/specialSale',
          component: specialSale
        },
        {
          path: 'classify',
          component: classify
        },
        {
          path: 'login',
          component: login
        },
        {
          path: 'shopCart',
          component: shopCart
        }
      ]
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/client',
      component: client
    }
  ]
})
