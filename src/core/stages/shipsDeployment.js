import Vue from 'vue'

export const NAME = 'SHIPS_DEPLOYMENT'

export const onCellClick = (state, index) => {
  Vue.set(state.playerGrid.ships, index, true)
}
