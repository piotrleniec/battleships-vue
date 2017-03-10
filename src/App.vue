<template>
  <div id="app">
    <img src="./assets/logo.png">
    <grid />
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
