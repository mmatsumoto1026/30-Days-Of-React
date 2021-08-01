class Animal {
    constructor(name, age, color, legs) {
        console.log(this) // Check the output from here
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
const animal1 = new Animal('Taro', '7', 'brown', 4)
console.log(animal1)
animal1.logName()
animal1.logAge()


class Dog extends Animal {
    saySomething() {
      console.log('Bow wow')
    }
}
const dog1 = new Dog()
dog1.saySomething()

class Cat extends Animal {
    saySomething() {
      console.log('Miyaou')
    }
}
const cat1 = new Cat()
cat1.saySomething()