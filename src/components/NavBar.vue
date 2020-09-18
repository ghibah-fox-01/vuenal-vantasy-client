<template>
  <nav class="navbar navbar-light bg-light">
    <div class="navbar-left">
      <a class="navbar-brand text-reset" href="#">
        <img src="../assets/img/vuenal-logo.png" width="50" height="50" class="d-inline-block align-top" alt="" loading="lazy">
        Vuenal-Racer
      </a>
      <img src="../assets/img/logo.png" width="50" height="50" class="d-inline-block align-top" alt="" loading="lazy">
      <img src="../assets/img/logo.png" width="35" height="35" class="d-inline-block align-top" alt="" loading="lazy">
      <img src="../assets/img/logo.png" width="50" height="50" class="d-inline-block align-top" alt="" loading="lazy">
      <img src="../assets/img/logo.png" width="35" height="35" class="d-inline-block align-top" alt="" loading="lazy">
      <img src="../assets/img/logo.png" width="50" height="50" class="d-inline-block align-top" alt="" loading="lazy">
      <img src="../assets/img/logo.png" width="35" height="35" class="d-inline-block align-top" alt="" loading="lazy">
      <img src="../assets/img/logo.png" width="50" height="50" class="d-inline-block align-top" alt="" loading="lazy">
      <img src="../assets/img/logo.png" width="35" height="35" class="d-inline-block align-top" alt="" loading="lazy">
      <img src="../assets/img/logo.png" width="50" height="50" class="d-inline-block align-top" alt="" loading="lazy">
      <img src="../assets/img/logo.png" width="35" height="35" class="d-inline-block align-top" alt="" loading="lazy">
      <img src="../assets/img/logo.png" width="50" height="50" class="d-inline-block align-top" alt="" loading="lazy">
    </div>
    <div class="navbar-right">
      <button @click="logout" type="button" class="btn btn-lg btn-block btn-outline-danger">Exit Game</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'LoginPage' })
    }
  }
}
</script>

<style>

</style>
