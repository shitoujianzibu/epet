import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  dog: {}
}
const actions = {
  sendDogAjax () {
    axios.get('/dog/indexpage/homepage')
      .then(res => {
        if (res) {
          const result = res.data
          if (result.code === 0) {
            state.dog = result.data
            // console.log(state.dog) // 这里有数据
          }
        }
      })
  }
}

// console.log(actions.sendDogAjax())
const getters = {
  dog (state) {
    return state.dog
  }
}
export default new Vuex.Store({
  state,
  actions,
  getters
})

