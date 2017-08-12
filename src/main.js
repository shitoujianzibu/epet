import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Mint from 'mint-ui'
import VueScroller from 'vue-scroller'
// 引入mock数据加载模块
import './mock/mockServer'
import App from './App'
import store from './store/store'
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
  components: {
    App
  },
  store
})
