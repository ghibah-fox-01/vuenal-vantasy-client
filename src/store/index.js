import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listUser: [],
    answer: '',
    myProfile: {
      username: '',
      score: 0,
      socketId: ''
    },
    listQuestion: ['Architecture', 'Programming', 'Asyawaladu', 'Swaladubab', 'Cangcimen', 'Borokokok'],
    question: ''
  },
  mutations: {
    SOCKET_GET_DATA_USER (state, payload) {
      // getting data user -> when start game until finish game(list user score)
      state.listUser = payload
    },
    SET_MY_PROFILE (state, payload) {
      state.myProfile.username = payload.username
      state.myProfile.score = payload.score
      state.myProfile.socketId = payload.socketId
      localStorage.setItem('socketId', payload.socketId)
    },
    SET_MY_PROFILE_USERNAME (state, payload) {
      // change username in my profile
      state.myProfile.username = payload
    },
    SET_MY_PROFILE_SCORE (state, payload) {
      state.myProfile.score = payload
    },
    SOCKET_GET_LIST_QUESTION (state, payload) {
      state.listQuestion = payload
    },
    SET_ANSWER (state) {
      state.answer = ''
    },
    SET_QUESTION (state, payload) {
      state.question = payload
    }
  },
  actions: {
    checkAnswer (context, data, question) {
      if (data !== question) {
        this.commit('SET_ANSWER')
      } else {
        const score = this.myProfile.score + 10
        context.commit('SET_MY_PROFILE_SCORE', score)
        context.dispatch('updateScore')
      }
    },
    updateScore () {
      this.$socket.emit('updateUserScore', {
        username: this.myProfile.username,
        score: this.myProfile.score,
        socketId: localStorage.getItem('socketId')
      })
    },
    enterGame () {
      this.$socket.emit('newUser', {
        username: this.myProfile.username
      })
    }
  },
  getters: {

  },
  modules: {
  }
})
