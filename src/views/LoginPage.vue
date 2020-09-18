<template>
<div class="container login-page">
  <div class="flex-column">
    <div class="col-sm flex-items-top">
      <h1>Welcome to Vueracer!</h1>
      <img src="../assets/img/vuenal-logo.png" alt="">
    </div>
    <div class="col-sm flex-items">
      <form @submit.prevent="login">
        <div class="form-group">
          <h3>Input your Nickname</h3>
          <input style="text-align:center" v-model="username" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
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
    login () {
      this.$socket.emit('newUser', this.username)
      localStorage.setItem('username', this.username)
      this.$router.push({ name: 'Home' })
    }
  },
  created () {
    if (localStorage.getItem('username')) {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style>

</style>
