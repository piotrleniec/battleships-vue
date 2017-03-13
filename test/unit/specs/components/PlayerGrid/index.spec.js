import Vue from 'vue'
import Vuex from 'vuex'
import PlayerGrid from '@/components/PlayerGrid'
import * as cellTypes from '@/core/cellTypes/player'

describe('PlayerGrid.vue', () => {
  it('renders without errors', () => {
    const Constructor = Vue.extend(PlayerGrid)
    const store = new Vuex.Store({
      getters: {
        playerGrid: () => new Array(100).fill(cellTypes.WATER_IN_FOG_OF_WAR)
      }
    })

    const vm = new Constructor({ store }).$mount()

    expect(vm.$el.querySelectorAll('.player-grid__label').length).to.equal(21)
    expect(vm.$el.querySelectorAll('.player-grid__cell').length).to.equal(100)
  })
})
