import * as shipsDeployment from '@/core/stages/shipsDeployment'

export const getStageByName = name => ({
  [shipsDeployment.NAME]: shipsDeployment
})
