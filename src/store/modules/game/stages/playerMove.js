import * as types from '@/store/mutation-types'

export const NAME = 'PLAYER_MOVE'

export const onPlayerCellClick = (context, index) => {}

export const onEnemyCellClick = ({ commit }, index) => {
  commit(types.HIT_ENEMY_FIELD, index)
}
