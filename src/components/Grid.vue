<template>
  <div class="grid">
    <div class="grid__cell-row" v-for="row in ROWS">
      <cell v-for="column in COLUMNS" :label="row + column" />
    </div>
  </div>
</template>

<script>
import Cell from '@/components/Cell'

export default {
  name: 'grid',
  computed: {
    ROWS: function () {
      return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    },
    COLUMNS: function () {
      return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    }
  },
  components: {
    Cell
  }
}
</script>

<style>
.grid {
  display: inline-block;
  margin: auto;
  background-color: #e8ecf2;
  border: black solid 1px;
}

.grid__cell-row:hover {
  background-color: red;
}
</style>
