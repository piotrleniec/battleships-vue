<template>
  <div class="grid">
    <div class="grid__cell-row" v-for="rowIndex in 10">
      <div class="grid__cell" v-for="cellIndex in 10">
        {{ rowIndex }} {{ cellIndex }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'grid'
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

.grid__cell {
  display: inline-block;
  width: 50px;
  height: 50px;
  border: black solid 1px;
}
</style>
