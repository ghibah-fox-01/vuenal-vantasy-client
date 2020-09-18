<template>
  <div>
     <router-view/>
      <div class="box-winner">
          <h1 class="text-white">Winner : <strong>{{winner}}</strong></h1>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Winner',
  computed: {
    winner () {
      return this.$store.state.winnerUsername
    }
  }
}
</script>

<style>

</style>
