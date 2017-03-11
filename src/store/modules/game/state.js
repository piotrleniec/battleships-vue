import * as shipsDeploymentStage from './stages/shipsDeployment'

const createGrid = () => ({
  ships: new Array(100).fill(false),
  hits: new Array(100).fill(false)
})

const createGridWithShips = (numberOfShips) => {
  const grid = createGrid()

  for (var i = 0; i < numberOfShips; i++) {
    grid.ships[Math.floor(100 * Math.random())] = true
  }

  return grid
}

export default () => ({
  playerGrid: createGrid(),
  enemyGrid: createGridWithShips(10),
  currentStageName: shipsDeploymentStage.NAME
})
