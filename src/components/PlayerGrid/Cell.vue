<template>
  <div :class="classes" v-html="'&nbsp;'"></div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as cellTypes from '@/core/cellTypes/enemy'

export default {
  name: 'cell',
  props: ['x', 'y'],
  computed: {
    ...mapGetters(['enemyGrid']),
    classes: function () {
      const cellType = this.enemyGrid[10 * this.y + this.x]

      const modifierClass = {
        [cellTypes.FOG_OF_WAR]: 'player-grid__cell--fog-of-war',
        [cellTypes.HIT]: 'player-grid__cell--hit',
        [cellTypes.MISS]: 'player-grid__cell--miss'
      }[cellType]

      return ['player-grid__cell', modifierClass]
    }
  }
}
</script>

<style>
.player-grid__cell {
  display: inline-block;
  width: 60px;
  height: 60px;
  border: black solid 1px;
  line-height: 60px;
  text-align: center;
}

.player-grid__cell--fog-of-war {
  background-color: grey;
}

.player-grid__cell--hit {
  background-color: red;
}

.player-grid__cell--miss {
  background-color: blue;
}
</style>
