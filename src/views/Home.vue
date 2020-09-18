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
          <div v-if="correctMark===true"><h3 style="color: green">Correct! </h3></div>
          <div v-else-if="wrongMark===true"><h3 style="color: red">Wrong! </h3></div>
          <div v-else><h3></h3></div>
        </div>
        <h3>Time left: 32s</h3>
        </form>
        <h4>Progress Bars</h4>
        <div class="progress-bar">
          <div class="progress">
            <div class="progress-bar progress-bar-striped bg-success"
              role="progressbar"
              :style="`width:${score}%`">
            </div>
          </div>
          <ProgressBar v-for="user in listAllUser"
          :key="user.id"
          v-bind:user="user"></ProgressBar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar'
import ProgressBar from '../components/ProgressBar'

export default {
  name: 'Home',
  components: {
    NavBar,
    ProgressBar
  },
  computed: {
    randomWord () {
      return this.$store.state.words[this.$store.state.count]
    },
    listAllUser () {
      return this.$store.state.listUser
    }
  },
  data () {
    return {
      msg: '',
      username: '',
      input: '',
      score: 0,
      wrongMark: false,
      correctMark: false
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
      if (this.input === this.randomWord) {
        this.$store.dispatch('incrementCount')
        this.input = ''
        this.score += 10
        this.$socket.emit('getScore', this.score)
        this.wrongMark = false
        this.correctMark = true
      } else {
        this.correctMark = false
        this.wrongMark = true
      }
    }
  },
  created () {
    if (!localStorage.getItem('username')) {
      this.$router.push({ name: 'LoginPage' })
    }
  }
}
</script>
