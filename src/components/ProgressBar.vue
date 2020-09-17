<template>
  <div class="progress">
    <div
      class="progress-bar progress-bar-striped bg-warning"
      role="progressbar"
      style="width: 0%"
      aria-valuenow="75"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div class="mt-2 text-dark">{{name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: ["score", "name"],
  methods: {},
};
</script>

<style>
</style>