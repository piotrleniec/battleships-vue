export const createGrid = () => ({
  ships: new Array(100).fill(false),
  hits: new Array(100).fill(false)
})

export const createGridWithShips = (numberOfShips) => {
  const grid = createGrid()

  for (var i = 0; i < numberOfShips; i++) {
    grid.ships[Math.floor(100 * Math.random())] = true
  }

  return grid
}
