import Character from './Character.mjs'

export default class Villain extends Character {
  constructor(name, intelligence, strength, durability, speed, power, combat) {
    super(name, intelligence, strength, durability, speed, power, combat)
  }

  atack(die, dies) {
    console.log("ATAQUE VILLANO")

    let damage = 50

    return damage
  }

  // calculate critical
}