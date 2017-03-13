import getters from '@/store/modules/game/getters'
import createInitialState from '@/store/modules/game/state'
import * as enemyCellTypes from '@/core/cellTypes/enemy'
import * as playerCellTypes from '@/core/cellTypes/player'

const { enemyGrid, playerGrid } = getters

describe('enemyGrid', () => {
  it('returns enemy grid representation for components', () => {
    const state = createInitialState()
    const { ships, hits } = state.enemyGrid
    ships[0] = false; hits[0] = false
    ships[1] = true; hits[1] = false
    ships[2] = false; hits[2] = true
    ships[3] = true; hits[3] = true

    const enemyGridPresentation = enemyGrid(state)

    expect(enemyGridPresentation[0]).to.equal(enemyCellTypes.FOG_OF_WAR)
    expect(enemyGridPresentation[1]).to.equal(enemyCellTypes.FOG_OF_WAR)
    expect(enemyGridPresentation[2]).to.equal(enemyCellTypes.MISS)
    expect(enemyGridPresentation[3]).to.equal(enemyCellTypes.HIT)
  })
})

describe('playerGrid', () => {
  it('returns player grid representation for components', () => {
    const state = createInitialState()
    const { ships, hits } = state.playerGrid
    ships[0] = false; hits[0] = false
    ships[1] = true; hits[1] = false
    ships[2] = false; hits[2] = true
    ships[3] = true; hits[3] = true

    const playerGridPresentation = playerGrid(state)

    expect(playerGridPresentation[0]).to.equal(playerCellTypes.WATER_IN_FOG_OF_WAR)
    expect(playerGridPresentation[1]).to.equal(playerCellTypes.SHIP_IN_FOG_OF_WAR)
    expect(playerGridPresentation[2]).to.equal(playerCellTypes.VISIBLE_WATER)
    expect(playerGridPresentation[3]).to.equal(playerCellTypes.VISIBLE_SHIP)
  })
})
