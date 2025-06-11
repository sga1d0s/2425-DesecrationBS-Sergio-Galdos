import SuperHero from './SuperHero.mjs'
import Villain from './Villain.mjs'

export default class TrainingGround {
  constructor(data) {
    this.data = data
  }

  createSuperHero(data) {

    // crear superheroe aleatorio a partir de la db

    const superHeroes = []

    for (let i = 0; i < data.length; i++) {
      const character = data[i];
      const powerStats = character.powerstats

      const superHero = new SuperHero(
        character.id,
        character.name,
        powerStats.intelligence,
        powerStats.strength,
        powerStats.durability,
        powerStats.speed,
        powerStats.power,
        powerStats.combat,
      )

      if (superHero.name !== "Junkpile") {
        superHeroes.push(superHero)
      }
    }

    const randomIndex = Math.floor(Math.random() * superHeroes.length)

    return superHeroes[randomIndex]
  }

  createVillain(data) {

    // crear villano buscando el character
    const superVillain = []

    for (let i = 0; i < data.length; i++) {
      const character = data[i];
      const powerStats = character.powerstats

      const villain = new Villain(
        character.id,
        character.name,
        powerStats.intelligence,
        powerStats.strength,
        powerStats.durability,
        powerStats.speed,
        powerStats.power,
        powerStats.combat,
      )

      if (villain.name === "Junkpile") {
        superVillain.push(villain)
      }

    }

    return superVillain[0]
  }
}