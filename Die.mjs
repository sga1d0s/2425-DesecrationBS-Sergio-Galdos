
export default class Die {
  constructor(values) {
    this.values = values
  }

  createD3() {
    let values = [1, 2, 3]
    return new Die(values)
  }

  createD5() {
    let values = [1, 2, 3, 4, 5]
    return new Die(values)
  }

  createD20() {
    let values = []
    for (let i = 0; i < 20; i++) {
      values.push(i)
    }
    return new Die(values)
  }

  createD100() {
    let values = []
    for (let i = 0; i < 100; i++) {
      values.push(i)
    }
    return new Die(values)
  }

  roll() {
    const randomIndex = Math.floor(Math.random() * this.values.length)
    return this.values[randomIndex]
  }

}