import {
  createGrid, createGridWithShips,
  enemyGridPresentation, playerGridPresentation
} from '@/core/grid'
import { getStageByName } from './stages'
import * as shipsDeployment from './stages/shipsDeployment'
import mutations from './mutations'

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

export default { state, getters, actions, mutations }
