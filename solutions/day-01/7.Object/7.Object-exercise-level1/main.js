let dog = {}
console.log(dog)
dog.name = "Taro"
dog.legs = 4
dog.color = "brown"
dog.age = 8
dog.bark = function() {
    return "woof woof"
}
const dogName = dog.name
const dogLegs = dog.legs
const dogColor = dog.color
const dogAge = dog.age
const dogBark = dog.bark
dog
dog.breed = "Mameshiba"
dog.getDogInfo = function() {
    return `${this.name} is a ${this.color} ${this.breed}.\nHe has ${this.legs} cute legs.\nHis age is ${this.age}.\nHe always says ${this.bark}`
}