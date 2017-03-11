import { zip } from 'lodash'
import * as enemyCellTypes from '@/core/cellTypes/enemy'

export const createGrid = () => ({
  ships: new Array(100).fill(false),
  hits: new Array(100).fill(false)
})

export const createGridWithShips = (numberOfShips) => {
  const grid = createGrid()

  for (var i = 0; i < numberOfShips; i++) {
    grid.ships[Math.floor(100 * Math.random())] = true
  }

  return grid
}

export const enemyGridPresentation = grid =>
  zip(grid.ships, grid.hits).map(zipped => {
    const [ship, hit] = zipped

    if (!hit) return enemyCellTypes.FOG_OF_WAR

    return ship ? enemyCellTypes.HIT : enemyCellTypes.MISS
  })
