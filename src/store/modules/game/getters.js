import { zip } from 'lodash'
import * as enemyCellTypes from '@/core/cellTypes/enemy'
import * as playerCellTypes from '@/core/cellTypes/player'

export const enemyGridPresentation = grid =>
  zip(grid.ships, grid.hits).map(zipped => {
    const [ship, hit] = zipped

    if (!hit) return enemyCellTypes.FOG_OF_WAR

    return ship ? enemyCellTypes.HIT : enemyCellTypes.MISS
  })

export const playerGridPresentation = grid =>
  zip(grid.ships, grid.hits).map(zipped => {
    const [ship, hit] = zipped

    if (ship) {
      return hit ? playerCellTypes.VISIBLE_SHIP : playerCellTypes.SHIP_IN_FOG_OF_WAR
    } else {
      return hit ? playerCellTypes.VISIBLE_WATER : playerCellTypes.WATER_IN_FOG_OF_WAR
    }
  })

const enemyWon = state => {
  const { ships, hits } = state.playerGrid

  return zip(ships, hits).filter(([ship, hit]) => ship && hit).length === 10
}

const playerWon = state => {
  const { ships, hits } = state.enemyGrid

  return zip(ships, hits).filter(([ship, hit]) => ship && hit).length === 10
}

export default {
  enemyGrid: state => enemyGridPresentation(state.enemyGrid),
  playerGrid: state => playerGridPresentation(state.playerGrid),
  enemyWon,
  playerWon
}
