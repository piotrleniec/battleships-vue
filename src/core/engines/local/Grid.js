export default class Grid {
  static withShips (numberOfShips) {
    const grid = new Grid()

    for (var i = 0; i < numberOfShips; i++) {
      grid.ships[Math.floor(100 * Math.random())] = true
    }

    return grid
  }

  constructor () {
    this.ships = new Array(100).fill(false)
    this.hits = new Array(100).fill(false)
  }
}
