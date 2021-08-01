class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.les = legs
      }
      
      logName() {
          console.log(this.name)
      }

      logAge() {
          console.log(this.age)
      }
}
const animal1 = new Animal("Tama", 12, "black", 4)
animal1.logAge()


class Dog extends Animal {
    saySomething() {
      console.log('Bow wow')
    }
    logAge() {
        console.log(`This dog is ${this.age} years old.`)
    }
}
const dog1 = new Dog("Taro", 7, "brown", 4)
dog1.logAge()