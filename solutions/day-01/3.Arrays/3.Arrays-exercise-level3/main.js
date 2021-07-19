const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
const minAge = ages[0]
const maxAge = ages[ages.length - 1]
let medianAge = []
if(ages.length % 2 === 0){
    medianAge = ages.slice(ages.length / 2, ages.length / 2 + 2)
} else {
    medianAge.push(ages[Math.floor(ages.length / 2)])
}

const averageAge = Math.floor(
    ages.reduce(function(acc, curVal){
    return acc + curVal
    }) 
    / ages.length)

const rangeOfTheAges = maxAge - minAge

const compairedValue = Math.max(Math.abs(minAge - averageAge), Math.abs(maxAge - averageAge))
console.log(compairedValue)

const firstTenItems = countries.slice(0, 10)

let middleCountry = []
if(countries.length % 2 === 0){
    middleCountry = countries.slice(countries.length / 2, countries.length / 2 + 2)
} else {
    middleCountry.push(countries[Math.floor(countries.length / 2)])
}

let devidedCountries = []
if(countries.length % 2 === 0){
    devidedCountries.push(countries.slice(0, Math.floor(countries.length / 2)))
    devidedCountries.push(countries.slice(Math.floor(countries.length / 2), countries.length - 1))
} else {
    devidedCountries.push(countries.slice(0, countries.length / 2))
    devidedCountries.push(countries.slice(countries.length / 2, countries.length))
}
console.log(devidedCountries)

