import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Mint from 'mint-ui'
import VueScroller from 'vue-scroller'

import App from './App'
import router from './router'

Vue.use(VueScroller)
Vue.use(Mint)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
