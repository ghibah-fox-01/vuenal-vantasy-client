import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    words: [],
    count: 0
  },
  mutations: {
    loadingWords (state, payload) {
      state.words = payload
    },
    incrementCount (state) {
      state.count++
    }
  },
  actions: {
    loadingWords (context, payload) {
      context.commit('loadingWords', payload)
    },
    incrementCount (context) {
      context.commit('incrementCount')
    }
  },
  modules: {
  }
})
