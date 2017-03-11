import { zip } from 'lodash'
import Grid from '@/core/engines/local/Grid'
import * as cellTypes from '@/core/cellTypes/enemy'

export default class Enemy {
  constructor () {
    this.grid = Grid.withShips(10)
  }

  get gridPresentation () {
    return zip(this.grid.ships, this.grid.hits).map((ship, hit) => {
      if (!hit) return cellTypes.FOG_OF_WAR

      return ship ? cellTypes.HIT : cellTypes.MISS
    })
  }
}
