import {
  createGrid, createGridWithShips,
  enemyGridPresentation, playerGridPresentation
} from '@/core/grid'
import { getStageByName } from './stages'
import * as shipsDeployment from './stages/shipsDeployment'
import * as types from '@/store/mutation-types'

const state = {
  playerGrid: createGrid(),
  enemyGrid: createGridWithShips(10),
  currentStageName: shipsDeployment.NAME
}

const getters = {
  enemyGrid: state => enemyGridPresentation(state.enemyGrid),
  playerGrid: state => playerGridPresentation(state.playerGrid)
}

const actions = {
  onPlayerCellClick: ({ commit }, { x, y }) => {
    commit(types.HANDLE_PLAYER_CELL_CLICK, 10 * y + x)
  },
  onEnemyCellClick: ({ commit }, { x, y }) => {
    commit(types.HANDLE_ENEMY_CELL_CLICK, 10 * y + x)
  }
}

const mutations = {
  [types.HANDLE_PLAYER_CELL_CLICK] (state, index) {
    const currentStage = getStageByName(state.currentStageName)

    currentStage.onPlayerCellClick(state, index)
  },
  [types.HANDLE_ENEMY_CELL_CLICK] (state, index) {
    const currentStage = getStageByName(state.currentStageName)

    currentStage.onEnemyCellClick(state, index)
  }
}

export default { state, getters, actions, mutations }
