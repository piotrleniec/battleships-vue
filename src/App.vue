<template>
  <div id="app">
    <div class="grid-container">
      <h1>Player</h1>
      <grid />
    </div>

    <div class="grid-container">
      <h1>Enemy</h1>
      <enemy-grid />
    </div>
  </div>
</template>

<script>
import Grid from '@/components/Grid'
import EnemyGrid from '@/components/EnemyGrid'

export default {
  name: 'app',
  components: { Grid, EnemyGrid }
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
