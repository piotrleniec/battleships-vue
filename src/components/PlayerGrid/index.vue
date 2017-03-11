<template>
  <div class="player-grid">
    <div>
      <div class="player-grid__label" v-html="'&nbsp;'"></div>
      <div
        v-for="label in horizontalLabels"
        class="player-grid__label"
      >{{ label }}</div>
    </div>
    <div v-for="(label, y) in verticalLabels">
      <div class="player-grid__label">{{ label }}</div>
      <cell v-for="x in 10" :x="x - 1" :y="y" />
    </div>
  </div>
</template>

<script>
import Cell from '@/components/PlayerGrid/Cell'

export default {
  name: 'player-grid',
  data: () => ({
    horizontalLabels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    verticalLabels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  }),
  components: { Cell }
}
</script>

<style>
.player-grid {
  display: inline-block;
  margin: auto;
  border: black solid 1px;
}

.player-grid__label {
  display: inline-block;
  width: 60px;
  height: 60px;
  border: black solid 1px;
  line-height: 60px;
  text-align: center;
  background-color: green;
}
</style>
