import { createGrid, createGridWithShips } from '@/store/modules/game/grid'

const state = {
  playerGrid: createGrid(),
  enemyGrid: createGridWithShips(10)
}

const getters = {}

const actions = {}

const mutations = {}

export default { state, getters, actions, mutations }
