const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
  }
  function getPersonInfoRegular(obj) {

    console.log(`${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is ${obj.age} years old. He is an ${obj.job}. He teaches ${obj.skills[0]}, ${obj.skills[1]}, ${obj.skills[2]}, ${obj.skills[3]}, ${obj.skills[4]}, ${obj.skills[5]}, ${obj.skills[6]}, ${obj.skills[7]}, and ${obj.skills[8]}. He speaks ${obj.languages[0]}, ${obj.languages[1]} and a little bit of ${obj.languages[2]}`)

  }
  function getPersonInfoDestructuring(obj) {
    
    const {firstName, lastName, age, country, job, skills: [skillOne, skillTwo, skillThree, skillFour, skillFive, skillSix, skillSeven, skillEight, skillNine], languages: [languageOne, languageTwo, languageThree]} = obj;


    console.log(`${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${skillOne}, ${skillTwo}, ${skillThree}, ${skillFour}, ${skillFive}, ${skillSix}, ${skillSeven}, ${skillEight}, and ${skillNine}. He speaks ${languageOne}, ${languageTwo} and a little bit of ${languageThree}`)
  }

  getPersonInfoRegular(person)
  getPersonInfoDestructuring(person)