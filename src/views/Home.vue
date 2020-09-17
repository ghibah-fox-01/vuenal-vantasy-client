<template>
  <div class="home">
    <NavBar />
    <div class="container">
      <div id="game-center" class="border border-secondary p-5">
      <h1>Welcome to, Vuenal Racer</h1>
        <form @submit.prevent="nextWord" id="form-input">
        <h3>Type the given word in, 3s</h3>
        <h1 id="random-generator" class="border border-secondary">"{{randomWord}}"</h1>
        <div class="form-group">
          <input v-model="input" type="text" class="form-control" id="input-word" placeholder="start typing...">
        </div>
        <h3>Time left: 32s</h3>
        </form>
        <h4>Progress Bars</h4>
        <div class="progress-bar">
          <div class="progress">

            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" :style="`width:${score}%`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped bg-info"
              role="progressbar"
              style="width: 50%"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped bg-warning"
              role="progressbar"
              style="width: 0%"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped bg-danger"
              role="progressbar"
              style="width: 85%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar'

export default {
  name: 'Home',
  components: {
    NavBar
  },
  computed: {
    randomWord () {
      return this.$store.state.words[this.$store.state.count]
    }
  },
  data () {
    return {
      msg: '',
      username: '',
      input: '',
      score: 0
    }
  },
  sockets: {
    loadingWords (data) {
      this.$store.commit('loadingWords', data)
    }
  },
  methods: {
    sendMessage () {
      this.$socket.emit('clientMessage', {
        msg: this.msg,
        username: this.username
      })
    },
    nextWord () {
      this.$store.commit('incrementCount')
      this.input = ''
      this.score += 10
    }
  }
}
</script>
