import * as types from '@/store/mutation-types'

export const NAME = 'SHIPS_DEPLOYMENT'

export const onPlayerCellClick = ({ commit }, index) => {
  commit(types.DEPLOY_SHIP, index)
}

export const onEnemyCellClick = (context, index) => {}
