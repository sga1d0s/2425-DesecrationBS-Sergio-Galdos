import Character from './Character.mjs'

export default class SuperHero extends Character {
  constructor(id, name, intelligence, strength, durability, speed, power, combat) {
    super(id, name, intelligence, strength, durability, speed, power, combat)
  }

  atack(die) {
    console.log("ATAQUE HEROE " + die)
    console.log(this.HP)

    return 20
  }

  // calculate critical
}