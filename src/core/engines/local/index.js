import * as cellTypes from '@/core/cellTypes'

export default class LocalEngine {
  constructor () {
    this.playerGrid = new Array(100).fill(cellTypes.WATER)
    this.opponentGrid = this.initializeOpponentGrid()
    this.opponentGridVisibilityMask = new Array(100).fill(false)
  }

  initializeOpponentGrid () {
    const opponentGrid = new Array(100).fill(cellTypes.WATER)

    for (var i = 0; i < 10; i++) {
      opponentGrid[Math.floor(100 * Math.random())] = cellTypes.SHIP
    }

    return opponentGrid
  }
}
