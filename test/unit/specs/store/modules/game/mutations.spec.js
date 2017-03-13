import mutations from '@/store/modules/game/mutations'
import * as types from '@/store/mutation-types'
import createInitialState from '@/store/modules/game/state'
import * as playerMoveStage from '@/store/modules/game/stages/playerMove'
import * as shipsDeploymentStage from '@/store/modules/game/stages/shipsDeployment'

describe(types.DEPLOY_SHIP, () => {
  context('when adding a new ship', () => {
    context('where there are less than 9 ships', () => {
      it("adds a new ship and doesn't change currentStageName", () => {
        const state = createInitialState()

        mutations[types.DEPLOY_SHIP](state, 3)

        expect(state.playerGrid.ships[3]).to.equal(true)
        expect(state.currentStageName).to.equal(shipsDeploymentStage.NAME)
      })
    })

    context('when there are 9 ships', () => {
      it('adds a new ship and sets currentStageName to playerMoveStage.NAME', () => {
        const state = createInitialState()
        for (var i = 0; i < 9; i++) {
          state.playerGrid.ships[i] = true
        }

        mutations[types.DEPLOY_SHIP](state, 9)

        expect(state.playerGrid.ships[9]).to.equal(true)
        expect(state.currentStageName).to.equal(playerMoveStage.NAME)
      })
    })
  })

  context('when trying to set existing ship', () => {
    it('does nothing', () => {
      const state = createInitialState()
      state.playerGrid.ships[5] = true

      mutations[types.DEPLOY_SHIP](state, 5)

      expect(state.playerGrid.ships[5]).to.equal(true)
    })
  })
})
