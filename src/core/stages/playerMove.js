import Vue from 'vue'
import * as enemyMoveStage from '@/core/stages/enemyMove'

export const NAME = 'PLAYER_MOVE'

export const onPlayerCellClick = (state, index) => {}

export const onEnemyCellClick = (state, index) => {
  Vue.set(state.enemyGrid.hits, index, true)

  state.currentStageName = enemyMoveStage.NAME
}
