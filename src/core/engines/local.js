import * as cellStates from '@/core/cellStates'

export default class LocalEngine {
  constructor () {
    this.playerGrid = new Array(100).fill(cellStates.MISS)
    this.opponentGrid = this.initializeOpponentGrid()
    this.opponentGridVisibilityMask = new Array(100).fill(false)
  }

  initializeOpponentGrid () {
    const opponentGrid = new Array(100).fill(cellStates.MISS)

    for (var i = 0; i < 10; i++) {
      opponentGrid[Math.floor(100 * Math.random())] = cellStates.HIT
    }

    return opponentGrid
  }
}
