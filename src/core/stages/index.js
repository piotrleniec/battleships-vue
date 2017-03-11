import * as shipsDeployment from '@/core/stages/shipsDeployment'

const GROUPED_STAGES = {
  [shipsDeployment.NAME]: shipsDeployment
}

export const getStageByName = name => GROUPED_STAGES[name]
