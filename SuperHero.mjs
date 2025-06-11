import Character from './Character.mjs'

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

      console.log("FAIL!! " + this.name + " obtiene un " + rollDie20 +
        " y se clava el arma en su pierna izda. Recibe un daño de " + damage + " puntos")

      // DAÑO NORMAL
    } else if (rollDie20 < 18 && rollDie20 > 2) {
      damage = Math.ceil((this.POW + this.STR) * rollDie20 / 100)

      console.log(this.name + " obtiene un " + rollDie20 + ", empuña su arma y ejerce un daño de " + damage + " puntos")

      // DAÑO CRÍTICO
    } else if (rollDie20 >= 18) {
      damage = this.criticalAtack(rollDie20, dies)

      console.log("CRITICAL HIT!! " + this.name + " obtiene un " + rollDie20 + " y ejerce un daño de " + damage + " puntos")
    }

    return damage
  }

  // calculate critical
  criticalAtack(rollDie20, dies) {

    let damage = null
    let criticalDamage = null
    let normalDamage = Math.ceil((this.POW + this.STR) * rollDie20 / 100)

    let criticalRollD3 = dies[0].roll()
    let criticalRollD5 = dies[1].roll()

    if (rollDie20 === 18) {
      criticalDamage = Math.ceil((this.INT * this.DUR / 100) * criticalRollD3)
    }
    if (rollDie20 === 19) {
      criticalDamage = Math.ceil((this.INT * this.DUR / 100) * 2 * criticalRollD3)
    }
    if (rollDie20 === 20) {
      criticalDamage = Math.ceil((this.INT * this.DUR / 100) * 3 * criticalRollD5)
    }

    damage = normalDamage + criticalDamage

    return damage
  }
}