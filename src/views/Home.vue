<template>
  <div class="container">
    <div class="row">
      <div class="col-6 mx-auto">
        <img alt="Vue logo" src="../assets/logo.png">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">@</span>
          </div>
          <input v-model="msg" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 mx-auto">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">chat here</span>
          </div>
          <input v-model="username" type="text" class="form-control" placeholder="text here" aria-label="Username" aria-describedby="basic-addon1">
        </div>
      </div>
    </div>
    <button class="btn btn-lg btn-success" @click="sendMessage">SEND</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      msg: '',
      username: ''
    }
  },
  sockets: {
    someoneConnect (data) {
      console.log(data, '<<<<<<')
    },
    hai (data) {
      console.log(data, '<<<<< socket dari server')
    }
  },
  methods: {
    sendMessage () {
      this.$socket.emit('clientMessage', {
        msg: this.msg,
        username: this.username
      })
    }
  }
}
</script>
