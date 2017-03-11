import * as shipsDeploymentStage from '@/core/stages/shipsDeployment'
import * as playerMoveStage from '@/core/stages/playerMove'

const GROUPED_STAGES = {
  [shipsDeploymentStage.NAME]: shipsDeploymentStage,
  [playerMoveStage.NAME]: playerMoveStage
}

export const getStageByName = name => GROUPED_STAGES[name]
