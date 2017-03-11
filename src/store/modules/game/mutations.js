import Vue from 'vue'
import * as playerMoveStage from './stages/playerMove'
import * as enemyMoveStage from './stages/enemyMove'
import * as types from '@/store/mutation-types'

export default {
  [types.DEPLOY_SHIP] (state, index) {
    Vue.set(state.playerGrid.ships, index, true)

    const deployedShips = state.playerGrid.ships.filter(ship => ship).length
    if (deployedShips === 10) {
      state.currentStageName = playerMoveStage.NAME
    }
  },
  [types.HIT_ENEMY_FIELD] (state, index) {
    Vue.set(state.enemyGrid.hits, index, true)

    state.currentStageName = enemyMoveStage.NAME
  }
}
