<template>
  <div
    :class="classes"
    @click="onEnemyCellClick({ x, y })"
    v-html="'&nbsp;'"
  >
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import * as cellTypes from '@/core/cellTypes/enemy'

export default {
  name: 'cell',
  props: ['x', 'y'],
  computed: {
    ...mapGetters(['enemyGrid']),
    classes: function () {
      const cellType = this.enemyGrid[10 * this.y + this.x]

      const modifierClass = {
        [cellTypes.FOG_OF_WAR]: 'enemy-grid__cell--fog-of-war',
        [cellTypes.HIT]: 'enemy-grid__cell--hit',
        [cellTypes.MISS]: 'enemy-grid__cell--miss'
      }[cellType]

      return ['enemy-grid__cell', modifierClass]
    }
  },
  methods: mapActions(['onEnemyCellClick'])
}
</script>

<style>
.enemy-grid__cell {
  display: inline-block;
  width: 60px;
  height: 60px;
  border: black solid 1px;
  line-height: 60px;
  text-align: center;
}

.enemy-grid__cell--fog-of-war {
  background-color: grey;
}

.enemy-grid__cell--hit {
  background-color: red;
}

.enemy-grid__cell--miss {
  background-color: blue;
}
</style>
