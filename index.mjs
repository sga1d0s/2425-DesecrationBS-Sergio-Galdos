import Die from "./Die.mjs"
import Character from "./Character.mjs"
import TrainingGround from "./TrainingGround.mjs"

main()

async function main() {

  // fetch DB
  const url = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
  const response = await fetch(url)
  const data = await response.json()

  // create dies
  let die = new Die
  let die100 = die.createD100()

  let value = die100.roll()

  // console.log(value)

  // create fighters
  const hero = TrainingGround.createSuperHero(data)
  const villain = TrainingGround.createVillain(data)

  // create combat


  // combat.execute()()

}