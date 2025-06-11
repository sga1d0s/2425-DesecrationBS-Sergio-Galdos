import Die from "./Die.mjs"
import Character from "./Character.mjs"
import TrainingGround from "./TrainingGround.mjs"
import Combat from "./Combat.mjs"

main()

async function main() {

  // fetch DB
  const url = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
  const response = await fetch(url)
  const data = await response.json()

  // create dies
  let dies = createDies()

  // console.log(dies[1].values)

  // create fighters
  const character = new TrainingGround(data)

  const hero = character.createSuperHero(data)
  const villain = character.createVillain(data)

  // create combat
  const combat = new Combat(hero, villain, dies)

  combat.execute()

}

function createDies() {
  let dies = []
  let die = new Die

  dies.push(die.createD3())
  dies.push(die.createD5())
  dies.push(die.createD20())
  dies.push(die.createD100())

  return dies
}