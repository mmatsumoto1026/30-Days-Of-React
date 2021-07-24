const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

for(let user in users) {
    if(users[user].skills.length > 5){
    console.log(user)
    }
}

let count = 0
for(let user in users) {
    if(users[user].isLoggedIn){
    count++
    }
}
console.log(count)
count = 0

for(let user in users) {
    if(users[user].points >= 50){
    count++
    }
}
console.log(count)

for(let user in users) {
    if(/MongoDB/.test(users[user].skills)
        && /Express/.test(users[user].skills)
        && /React/.test(users[user].skills)
        && /Node/.test(users[user].skills)){
    console.log(user)
    }
}

const users_copy = {...users}
users_copy.manabu = {}
console.log(users_copy)
console.log(users)

let allKeys = []
let allValues = []
for(let user in users) {
    for(let key in users[user]){
        allKeys.push(key)
        allValues.push(users[user][key])
    }
}
console.log(allKeys)
console.log(allValues)

const countries = {
    Albania: {
        capital: 'Tirana',
        population: 2845955,
        language: 'Albanian'
    },
    Bolivia: {
        capital: 'Sucre',
        population: 11428245,
        language: 'Spanish'
    },
    Canada: {
        capital: 'Ottawa',
        population: 38048738,
        language: 'English - French'
    },
    Denmark: {
        capital: 'Copenhagen',
        population: 5843347,
        language: 'Danish'
    },
    Ethiopia: {
        capital: 'Addis Ababa',
        population: 117876227,
        language: 'Afar'
    },
    Finland: {
        capital: 'Helsinki',
        population: 5536146,
        language: 'Finnish - Swedish'
    },
    Germany: {
        capital: 'Berlin',
        population: 83190556,
        language: 'German'
    },
    Hungary: {
        capital: 'Budapest',
        population: 9730000,
        language: 'Hungarian'
    },
    Ireland: {
        capital: 'Dublin',
        population: 6572728,
        language: 'English'
    },
    Japan: {
        capital: 'Tokyo',
        population: 125360000,
        language: 'Japanese'
    },
    Kenya: {
        capital: 'Nairobi',
        population: 54985698,
        language: 'Swahili'
    }
}

for(let country in countries){
    console.log(country, ', ', countries[country].capital, ', ', countries[country].population, ', ', countries[country].language)
}
