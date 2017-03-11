import * as shipsDeploymentStage from './shipsDeployment'
import * as playerMoveStage from './playerMove'
import * as enemyMoveStage from './enemyMove'

const GROUPED_STAGES = {
  [shipsDeploymentStage.NAME]: shipsDeploymentStage,
  [playerMoveStage.NAME]: playerMoveStage,
  [enemyMoveStage.NAME]: enemyMoveStage
}

export const getStageByName = name => GROUPED_STAGES[name]
