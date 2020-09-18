import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listUser: {},
    words: [],
    count: 0
  },
  mutations: {
    INCREMENT_COUNT (state) {
      state.count++
    },
    SOCKET_MUTATION_GET_DATA_USER (state, payload) {
      state.listUser = payload
    },
    SOCKET_MUTATION_GET_LIST_QUESTION (state, payload) {
      state.words = payload
    }
  },
  actions: {
    incrementCount (context) {
      context.commit('INCREMENT_COUNT')
    }
  },
  getters: {
  },
  modules: {
  }
})
