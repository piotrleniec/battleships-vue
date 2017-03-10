<template>
  <div :class="classes">{{ label }}</div>
</template>

<script>
import * as cellStates from '@/core/cellStates'

export default {
  name: 'cell',
  props: ['label', 'state'],
  computed: {
    classes: function () {
      const modifierClass = {
        [cellStates.FOG_OF_WAR]: 'cell--grey',
        [cellStates.MISS]: 'cell--blue',
        [cellStates.HIT]: 'cell--red'
      }[this.state]

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
}

.cell--grey {
  background-color: grey;
}

.cell--blue {
  background-color: blue;
}

.cell--red {
  background-color: red;
}
</style>
