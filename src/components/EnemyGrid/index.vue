<template>
  <div class="grid">
    <div>
      <div class="grid__header" v-html="'&nbsp;'"></div>
      <div
        v-for="label in horizontalLabels"
        class="grid__header"
      >{{ label }}</div>
    </div>
    <div v-for="(label, y) in verticalLabels">
      <div class="grid__header">{{ label }}</div>
      <cell v-for="x in 10" :x="x - 1" :y="y" />
    </div>
  </div>
</template>

<script>
import Cell from '@/components/EnemyGrid/Cell'

export default {
  name: 'enemy-grid',
  data: () => ({
    horizontalLabels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    verticalLabels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  }),
  components: { Cell }
}
</script>

<style>
.grid {
  display: inline-block;
  margin: auto;
  border: black solid 1px;
}

.grid__header {
  display: inline-block;
  width: 60px;
  height: 60px;
  border: black solid 1px;
  line-height: 60px;
  text-align: center;
  background-color: green;
}
</style>
