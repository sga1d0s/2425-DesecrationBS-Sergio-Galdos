import Character from './Character.mjs'

export default class Villain extends Character {
  constructor(name, intelligence, strength, durability, speed, power, combat) {
    super(name, intelligence, strength, durability, speed, power, combat)
  }

  atack(rollDie20, dies) {
    // DAÑO NORMAL
    if (rollDie20 < 18 && rollDie20 > 2) {
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