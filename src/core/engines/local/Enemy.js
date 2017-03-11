import Grid from '@/core/engines/local/Grid'

export default class Enemy {
  constructor () {
    this.grid = Grid.withShips(10)
  }
}
