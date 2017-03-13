import Vue from 'vue'
import Vuex from 'vuex'
import Cell from '@/components/EnemyGrid/Cell'
import * as cellTypes from '@/core/cellTypes/enemy'

describe('EnemyGrid/Cell.vue', () => {
  const test = (cellType, expectedClassName) => {
    context(`when coordinates point to ${cellType} cell type`, () => {
      it(`has ${expectedClassName} class`, () => {
        const Constructor = Vue.extend(Cell)
        const store = new Vuex.Store({
          getters: {
            enemyGrid: () => new Array(100).fill(cellType)
          }
        })

        const vm = new Constructor({ store, propsData: { x: 0, y: 0 } }).$mount()

        expect(vm.$el.className).to.include(expectedClassName)
      })
    })
  }

  test(cellTypes.FOG_OF_WAR, 'enemy-grid__cell--fog-of-war')
  test(cellTypes.HIT, 'enemy-grid__cell--hit')
  test(cellTypes.MISS, 'enemy-grid__cell--miss')
})
