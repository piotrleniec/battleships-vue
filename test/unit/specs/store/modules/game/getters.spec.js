import getters from '@/store/modules/game/getters'
import createInitialState from '@/store/modules/game/state'
import * as enemyCellTypes from '@/core/cellTypes/enemy'
import * as playerCellTypes from '@/core/cellTypes/player'

const { enemyGrid, playerGrid, enemyWon, playerWon } = getters

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

describe('enemyWon', () => {
  context("when less than 10 player's ships are hit", () => {
    it('returns false', () => {
      const state = createInitialState()
      const { ships, hits } = state.playerGrid
      for (var i = 0; i < 10; i++) ships[i] = true
      for (var j = 0; j < 5; j++) hits[j] = true

      expect(enemyWon(state)).to.equal(false)
    })
  })

  context("when 10 player's ships are hit", () => {
    it('returns true', () => {
      const state = createInitialState()
      const { ships, hits } = state.playerGrid
      for (var i = 0; i < 10; i++) ships[i] = true
      for (var j = 0; j < 10; j++) hits[j] = true

      expect(enemyWon(state)).to.equal(true)
    })
  })
})

describe('playerWon', () => {
  context("when less than 10 enemies' ships are hit", () => {
    it('returns false', () => {
      const state = createInitialState()
      const { ships, hits } = state.enemyGrid
      for (var i = 0; i < 10; i++) ships[i] = true
      for (var j = 0; j < 5; j++) hits[j] = true

      expect(playerWon(state)).to.equal(false)
    })
  })

  context("when 10 enemies' ships are hit", () => {
    it('returns true', () => {
      const state = createInitialState()
      const { ships, hits } = state.enemyGrid
      for (var i = 0; i < 10; i++) ships[i] = true
      for (var j = 0; j < 10; j++) hits[j] = true

      expect(playerWon(state)).to.equal(true)
    })
  })
})
