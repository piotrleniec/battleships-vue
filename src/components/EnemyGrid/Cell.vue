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
        [cellTypes.FOG_OF_WAR]: 'cell--fog-of-war',
        [cellTypes.HIT]: 'cell--hit',
        [cellTypes.MISS]: 'cell--miss'
      }[cellType]

      return ['cell', modifierClass]
    }
  }
}
</script>

<style>
.cell {
  display: inline-block;
  width: 60px;
  height: 60px;
  border: black solid 1px;
  line-height: 60px;
  text-align: center;
}

.cell--fog-of-war {
  background-color: grey;
}

.cell--hit {
  background-color: red;
}

.cell--miss {
  background-color: blue;
}
</style>
