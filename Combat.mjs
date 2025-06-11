
export default class Combat {
  constructor(fighter1, fighter2, dies) {
    this.fighter1 = fighter1
    this.fighter2 = fighter2
    this.dies = dies
  }

  execute() {
    let round = 1
    let fighters = []

    // ejecuta el combate
    console.log("WELLCOME TO THE COMBAT ARENA!!")
    console.log("------------------------------")
    console.log("Hoy combatirán " + this.fighter1.name + " y " + this.fighter2.name)
    console.log("------------------------------")
    console.log("Listado de atributos")
    console.log("--------------------")
    console.log(this.fighter1)
    console.log(this.fighter2)


    // comienza el fighter con más INT + COM
    if (this.fighter1.INT + this.fighter1.COM >= this.fighter2.INT + this.fighter2.COM) {
      console.log("------------------------------")
      console.log("El primer asalto es para " + this.fighter1.name)
      console.log("------------------------------")
      fighters = [this.fighter1, this.fighter2]

    } else {
      console.log("------------------------------")
      console.log("El primer asalto es para " + this.fighter2.name)
      console.log("------------------------------")
      fighters = [this.fighter2, this.fighter1]
    }

    while (this.getGameOver()) {
      let turn = this.getTurn(round)
      let enemyTurn = this.getEnemyTurn(round)

      // FASE 1 exito o fracaso en el ataque
      console.log("Comienza el asalto " + round)
      console.log("------------------")
      console.log("El asalto es para " + fighters[turn].name)

      let rollDie100 = this.dies[3].roll()

      // si rolldie igual o menor que COM el ataque tiene éxito
      if (rollDie100 <= fighters[turn].COM) {
        console.log(fighters[turn].name + " obtiene un " + rollDie100 + " y ataca con éxito")

        // lanzamos 1d20
        let rollDie20 = this.dies[2].roll()

        // obtener daño del ataque
        let damage = fighters[turn].atack(rollDie20, this.dies)

        if (rollDie20 < 3 && fighters[turn].name != 'Junkpile') {
          fighters[turn].HP -= damage
        } else {
          fighters[enemyTurn].HP -= damage
        }


      } else {
        console.log(fighters[turn].name + " obtiene un " + rollDie100 + " y ha fallado")
      }

      // FASE 2 Daño del ataque

      round++
      console.log(fighters)
    }

  }

  getTurn(round) {
    // cambiode turno
    if (round % 2 === 0) {
      return 1
    } else {
      return 0
    }
  }

  getEnemyTurn(round) {
    // cambiode turno
    if (round % 2 != 0) {
      return 1
    } else {
      return 0
    }
  }

  getGameOver() {
    if (this.fighter1.HP <= 0) {
      // pierde el fighter1
      console.log("---------------------------")
      console.log("---------------------------")
      console.log(this.fighter1.name + " ha sido derrotado")
      return false

    } else if (this.fighter2.HP <= 0) {
      // pierde el fighter 2
      console.log("---------------------------")
      console.log("---------------------------")
      console.log(this.fighter2.name + " ha sido derrotado")
      return false

    } else return true
  }

}