import Player from '@/core/engines/local/Player'
import Enemy from '@/core/engines/local/Enemy'

export default class LocalEngine {
  constructor () {
    this.player = new Player()
    this.enemy = new Enemy()
  }
}
