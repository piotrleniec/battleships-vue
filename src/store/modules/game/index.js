import { getStageByName } from './stages'
import createInitialState from './state'
import getters from './getters'
import mutations from './mutations'

const state = createInitialState()

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
