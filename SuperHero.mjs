import Character from './Character.mjs'
import Die from './Die.mjs'

export default class SuperHero extends Character {
  constructor(name, intelligence, strength, durability, speed, power, combat) {
    super(name, intelligence, strength, durability, speed, power, combat)
  }

  atack(die, dies) {
    let damage = null

    if (die < 3) {
      let fumbleRoll = dies[0].roll()
      if (fumbleRoll === 1) {
        damage = this.SPE / fumbleRoll
      } else {
        damage = Math.floor(this.SPE / (4 * fumbleRoll))
      }

    } else if (die < 18 && die > 2) {
      console.log("DAÑO NORMAL HEROE")
      damage =

    } else if (die >= 18) {
      console.log("DAÑO CRÍTICO HEROE")

      damage = 20
    }

    return damage
  }

  // calculate critical
}