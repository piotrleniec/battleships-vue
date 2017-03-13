import Vue from 'vue'
import Vuex from 'vuex'
import Cell from '@/components/PlayerGrid/Cell'
import * as cellTypes from '@/core/cellTypes/player'

describe('PlayerGrid/Cell.vue', () => {
  const test = (cellType, expectedClassName) => {
    context(`when coordinates point to ${cellType} cell type`, () => {
      it(`has ${expectedClassName} class`, () => {
        const Constructor = Vue.extend(Cell)
        const store = new Vuex.Store({
          getters: {
            playerGrid: () => new Array(100).fill(cellType)
          }
        })

        const vm = new Constructor({ store, propsData: { x: 0, y: 0 } }).$mount()

        expect(vm.$el.className).to.include(expectedClassName)
      })
    })
  }

  test(cellTypes.WATER_IN_FOG_OF_WAR, 'player-grid__cell--water-in-fog-of-war')
  test(cellTypes.VISIBLE_WATER, 'player-grid__cell--visible-water')
  test(cellTypes.SHIP_IN_FOG_OF_WAR, 'player-grid__cell--ship-in-fog-of-war')
  test(cellTypes.VISIBLE_SHIP, 'player-grid__cell--visible-ship')
})
