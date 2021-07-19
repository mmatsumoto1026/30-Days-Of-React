let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let words = text.split(/[ ,.]/)

while(words.findIndex(element => element === ' ' || element === '' || element === '.' ) >= 0){
    words.splice(words.findIndex(element => element === ' ' || element === '' || element === '.'),1)
}
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if(!shoppingCart.includes('Meat')){
  shoppingCart.unshift('Meat')
}

if(!shoppingCart.includes('Sugar')){
  shoppingCart.push('Sugar')
}

shoppingCart.splice(shoppingCart.indexOf('Honey'),1)

shoppingCart.splice(shoppingCart.indexOf('Tea'),1, 'Green Tea')

if(countries.includes('Ethiopia')){
  console.log('ETHIOPIA')
} else {
  countries.push('Ethiopia')
}

if(webTechs.includes('Sass')){
  console.log('Sass is a CSS preprocess')
} else {
  webTechs.push('Sass')
  console.log(webTechs)
}


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
