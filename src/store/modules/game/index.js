import {
  createGrid, createGridWithShips,
  enemyGridPresentation, playerGridPresentation
} from '@/store/modules/game/grid'
import { getStageByName } from '@/core/stages'
import * as shipsDeployment from '@/core/stages/shipsDeployment'
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
  onCellClick: ({ commit }, { x, y }) => {
    commit(types.CURRENT_STAGE_ON_CELL_CLICK, 10 * y + x)
  }
}

const mutations = {
  [types.CURRENT_STAGE_ON_CELL_CLICK] (state, index) {
    const currentStage = getStageByName(state.currentStageName)

    currentStage.onCellClick(state, index)
  }
}

export default { state, getters, actions, mutations }
