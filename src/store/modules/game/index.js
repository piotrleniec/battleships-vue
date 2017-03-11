import {
  createGrid, createGridWithShips,
  enemyGridPresentation, playerGridPresentation
} from '@/store/modules/game/grid'

const state = {
  playerGrid: createGrid(),
  enemyGrid: createGridWithShips(10)
}

const getters = {
  enemyGrid: state => enemyGridPresentation(state.enemyGrid),
  playerGrid: state => playerGridPresentation(state.playerGrid)
}

const actions = {}

const mutations = {}

export default { state, getters, actions, mutations }
