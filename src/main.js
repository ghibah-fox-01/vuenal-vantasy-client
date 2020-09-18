import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3002',
  vuex: {
    store,
    actionPrefix: 'SOCKET_ACTION_',
    mutationPrefix: 'SOCKET_MUTATION_'
  }
}))
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
