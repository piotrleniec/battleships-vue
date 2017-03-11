<template>
  <div
    :class="classes"
     @click="onCellClick(x, y)"
    v-html="'&nbsp;'"
  ></div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import * as cellTypes from '@/core/cellTypes/player'

export default {
  name: 'cell',
  props: ['x', 'y'],
  computed: {
    ...mapGetters(['playerGrid']),
    classes: function () {
      const cellType = this.playerGrid[10 * this.y + this.x]

      const modifierClass = {
        [cellTypes.WATER_IN_FOG_OF_WAR]: 'player-grid__cell--water-in-fog-of-war',
        [cellTypes.VISIBLE_WATER]: 'player-grid__cell--visible-water',
        [cellTypes.SHIP_IN_FOG_OF_WAR]: 'player-grid__cell--ship-in-fog-of-war',
        [cellTypes.VISIBLE_SHIP]: 'player-grid__cell--visible-ship'
      }[cellType]

      return ['player-grid__cell', modifierClass]
    }
  },
  methods: mapActions(['onCellClick'])
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

.player-grid__cell--water-in-fog-of-war {
  background-color: #8181f9;
}

.player-grid__cell--visible-water {
  background-color: blue;
}

.player-grid__cell--ship-in-fog-of-war {
  background-color: #ff7272;
}

.player-grid__cell--visible-ship {
  background-color: red;
}
</style>
