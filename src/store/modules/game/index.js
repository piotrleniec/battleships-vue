import Vue from 'vue'
import {
  createGrid, createGridWithShips,
  enemyGridPresentation, playerGridPresentation
} from '@/core/grid'
import { getStageByName } from './stages'
import * as shipsDeployment from './stages/shipsDeployment'
import * as playerMoveStage from './stages/playerMove'
import * as enemyMoveStage from './stages/enemyMove'
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
  onPlayerCellClick: (context, { x, y }) => {
    const currentStage = getStageByName(state.currentStageName)

    currentStage.onPlayerCellClick(context, 10 * y + x)
  },
  onEnemyCellClick: (context, { x, y }) => {
    const currentStage = getStageByName(state.currentStageName)

    currentStage.onEnemyCellClick(context, 10 * y + x)
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
  },
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

export default { state, getters, actions, mutations }
