import { zip } from 'lodash'
import Grid from '@/core/engines/local/Grid'
import * as cellTypes from '@/core/cellTypes/player'

export default class Player {
  constructor () {
    this.grid = new Grid()
  }

  get gridPresentation () {
    return zip(this.grid.ships, this.grid.hits).map((ship, hit) => {
      if (ship) {
        return hit ? cellTypes.VISIBLE_SHIP : cellTypes.SHIP_IN_FOG_OF_WAR
      } else {
        return hit ? cellTypes.VISIBLE_WATER : cellTypes.WATER_IN_FOG_OF_WAR
      }
    })
  }
}
