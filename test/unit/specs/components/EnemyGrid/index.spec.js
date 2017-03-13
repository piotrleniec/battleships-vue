import Vue from 'vue'
import Vuex from 'vuex'
import EnemyGrid from '@/components/EnemyGrid'
import * as cellTypes from '@/core/cellTypes/enemy'

describe('EnemyGrid.vue', () => {
  it('renders without errors', () => {
    const Constructor = Vue.extend(EnemyGrid)
    const store = new Vuex.Store({
      getters: {
        enemyGrid: () => new Array(100).fill(cellTypes.FOG_OF_WAR)
      }
    })

    const vm = new Constructor({ store }).$mount()

    expect(vm.$el.querySelectorAll('.enemy-grid__label').length).to.equal(21)
    expect(vm.$el.querySelectorAll('.enemy-grid__cell').length).to.equal(100)
  })
})
