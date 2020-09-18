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
    SOCKET_MUTATION_GET_DATA_USER (state, payload, id) {
      // getting data user -> when start game until finish game(list user score)
      for (const user in payload) {
        if (user !== id) {
          state.listUser[user] = payload[user]
        }
      }
      console.log(state.listUser)
      console.log(payload)
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
