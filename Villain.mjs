import Character from './Character.mjs'

export default class Villain extends Character {
  constructor(id, name, intelligence, strength, durability, speed, power, combat) {
    super(id, name, intelligence, strength, durability, speed, power, combat)
  }

  atack(die) {
    console.log("ATAQUE HEROE " + die)
    console.log(this.HP)

    return die
  }

  // calculate critical
}