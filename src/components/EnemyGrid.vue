<template>
  <div class="grid">
    <div>
      <div
        class="grid__cell grid__cell--header"
        v-html="'&nbsp;'"
      ></div>
      <div
        v-for="label in horizontalLabels"
        class="grid__cell grid__cell--header"
      >{{ label }}</div>
    </div>
    <div v-for="(label, y) in verticalLabels">
      <div class="grid__cell grid__cell--header">{{ label }}</div>
      <div v-for="x in 10" class="grid__cell" v-html="'&nbsp;'"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'enemy-grid',
  data: () => ({
    horizontalLabels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    verticalLabels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  })
}
</script>

<style>
.grid {
  display: inline-block;
  margin: auto;
  background-color: #e8ecf2;
  border: black solid 1px;
}

.grid__cell {
  display: inline-block;
  width: 60px;
  height: 60px;
  border: black solid 1px;
  line-height: 60px;
  text-align: center;
}

.grid__cell--header {
  background-color: #7b7c7c;
}
</style>
