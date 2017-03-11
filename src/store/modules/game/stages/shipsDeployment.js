import Vue from 'vue'
import * as playerMoveStage from './playerMove'

export const NAME = 'SHIPS_DEPLOYMENT'

export const onPlayerCellClick = (state, index) => {
  Vue.set(state.playerGrid.ships, index, true)

  const deployedShips = state.playerGrid.ships.filter(ship => ship).length
  if (deployedShips === 10) {
    state.currentStageName = playerMoveStage.NAME
  }
}

export const onEnemyCellClick = (state, index) => {}
