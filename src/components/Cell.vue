<template>
  <div class="cell">{{ label }}</div>
</template>

<script>
export default {
  name: 'cell',
  props: ['label']
}
</script>

<style>
.cell {
  display: inline-block;
  width: 60px;
  height: 60px;
  border: black solid 1px;
}
</style>
