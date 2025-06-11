import Character from './Character.mjs'
import Die from './Die.mjs'

export default class SuperHero extends Character {
  constructor(name, intelligence, strength, durability, speed, power, combat) {
    super(name, intelligence, strength, durability, speed, power, combat)
  }

  atack(rollDie20, dies) {
    let damage = null

    // FUMBLE
    if (rollDie20 < 3) {
      let fumbleRoll = dies[0].roll()

      if (fumbleRoll === 1) {
        damage = this.SPE / fumbleRoll
      } else {
        damage = Math.floor(this.SPE / (4 * fumbleRoll))
      }

      // DAÑO NORMAL
    } else if (rollDie20 < 18 && rollDie20 > 2) {
      damage = Math.ceil((this.POW + this.STR) * rollDie20 / 100)

      // DAÑO CRÍTICO
    } else if (rollDie20 >= 18) {
      console.log("DAÑO CRÍTICO HEROE")

      damage = 20
    }

    return damage
  }

  // calculate critical
}