<template>
  <div class="login-page m-3 p-3 border border-secondary">
    <div class="login-box-top">
    </div>
    <div class="form-center">
      <form>
        <div class="form-group">
          <label for="exampleInputText1">Guest Name</label>
          <input type="text" class="form-control" id="exampleInputText1" aria-describedby="textHelp" v-model="username">
        </div>
        <button v-on:click.prevent="Login" class="btn btn-primary">Submit</button>
      </form>
      <div class="vuenal-logo">
        <h1>This is our logo</h1>
      </div>
    </div>
    <div class="login-box-bottom">
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    Login () {
      this.$socket.emit('newUser', { username: this.username })
    }
  }
}
</script>

<style>

</style>
