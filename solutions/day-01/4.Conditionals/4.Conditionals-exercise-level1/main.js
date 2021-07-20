let age = prompt('Enter your age:')
if(age >= 18) {
    console.log('You are old enough to drive.')
} else {
    console.log(`You are left with ${18 - age} years to drive.`)
}

const myAge = 38
let yourAge = prompt('Enter your age:')
if(myAge > yourAge) {
    console.log(`I am ${myAge - yourAge} years older than you.`)
} else {
    console.log(`You are ${yourAge - myAge} years older than me.`)
}

let a = 4
let b = 3

if(a > b) {
    console.log(`${a} is greater than ${b}.`)
} else {
    console.log(`${a} is less than ${b}.`)
}

a > b
  ? console.log(`${a} is greater than ${b}.`)
  : console.log(`${a} is less than ${b}.`)

let number = prompt('Enter a number:')
if(number % 2 === 0){
    console.log(`${number} is an even number.`)
} else {
    console.log(`${number} is an odd number.`)
}