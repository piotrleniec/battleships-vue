import Vue from 'vue'
import { shuffle } from 'lodash'
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
  },
  [types.RANDOM_ENEMY_HIT] (state) {
    const availableIndices = state.playerGrid.hits.map((hit, index) => [hit, index])
                                                  .filter(([hit, index]) => !hit)
                                                  .map(([hit, index]) => index)
    const selectedIndex = shuffle(availableIndices)[0]

    Vue.set(state.playerGrid.hits, selectedIndex, true)

    state.currentStageName = playerMoveStage.NAME
  }
}
