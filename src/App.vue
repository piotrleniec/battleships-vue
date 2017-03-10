<template>
  <div id="app">
    <div class="grid-container">
      <h1>Player</h1>
      <grid />
    </div>

    <div class="grid-container">
      <h1>Opponent</h1>
      <grid />
    </div>
  </div>
</template>

<script>
import Grid from '@/components/Grid'

export default {
  name: 'app',
  components: { Grid }
}
</script>

<style>
#app {
  white-space: nowrap;
}

.grid-container {
  box-sizing: border-box;
  display: inline-block;
  width: 50%;
  white-space: normal;
}
</style>
