export default class Character {
  constructor(name, intelligence, strength, durability, speed, power, combat) {
    this.name = name
    this.INT = intelligence
    this.STR = strength
    this.DUR = durability
    this.SPE = speed
    this.POW = power
    this.COM = combat
    this.HP = Math.min(this.STR * 10, 666)
  }

  attack() {
  }
}