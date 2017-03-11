import * as shipsDeploymentStage from '@/core/stages/shipsDeployment'
import * as playerMoveStage from '@/core/stages/playerMove'
import * as enemyMoveStage from '@/core/stages/enemyMove'

const GROUPED_STAGES = {
  [shipsDeploymentStage.NAME]: shipsDeploymentStage,
  [playerMoveStage.NAME]: playerMoveStage,
  [enemyMoveStage.NAME]: enemyMoveStage
}

export const getStageByName = name => GROUPED_STAGES[name]
