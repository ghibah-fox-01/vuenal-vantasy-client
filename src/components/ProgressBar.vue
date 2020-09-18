<template>
  <div class="progress">
    <div
      class="progress-bar progress-bar-striped bg-warning"
      role="progressbar"
      v-bind:style="`width: ${user.score}%`"
      aria-valuenow="75"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div class="mt-2 text-dark">{{user.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: ['user'],
  methods: {}
}
</script>

<style>
</style>
