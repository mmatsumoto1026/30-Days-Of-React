  //1. Declare an empty array
  const arr = Array()

  //2. Declare an array with more than 5 number of elements
  const numbers = [1, 2, 3, 4, 5, 6]

  //3. Find the length of your array 
  let arrLength = numbers.length

  //4. Get the first item, the middle item and the lasta item of the array
  let firstItem = numbers[0]
  let middleItem = numbers[numbers.length / 2]
  let lastItem = numbers[numbers.length - 1]

  //5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
  const mixedDataTypes = [true, "string",100, undefined, Null, false]

  //6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
  const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

  //7. Print the array using console.log()
  console.log(itCompanies)

  //8. Print the number of companies in the array
  console.log(itCompanies.length)

  //9. Print the first company, middle and last company
  console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length / 2)], itCompanies[itCompanies.length - 1])

  //10. Print out each company
  for (let eachCompany of itCompanies) {
      console.log(eachCompany)
  }

  //11. Change each company name to uppercase one by one and print them out
  for (let eachCompany of itCompanies) {
    console.log(eachCompany.toUpperCase())
  }

  //12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
  console.log(itCompanies.join())

  //13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
  let certainCompany = "IBM"
  if(itCompanies.includes(certainCompany)) {
      //return certainCompany
  } else {
      //return "a company is not found"
  }

  //14. Filter out companies which have more than one 'o' without the filter method
  for (let i = 0; i < itCompanies.length ; i++) {
    if(((itCompanies[i].match(/o/g) || []).length) > 1) {
        itCompanies.splice(itCompanies.indexOf(itCompanies[i]),1)
        i--;
    }
  }

  //15. Sort the array using sort() method
  itCompanies.sort()

  //16. Reverse the array using reverse() method
  itCompanies.reverse()

  //17. Slice out the first 3 companies from the array
  itCompanies.slice(3);

  //18. Slice out the last 3 companies from the array
  itCompanies.slice(0,itCompanies.length - 3)

  //19. Slice out the middle IT company or companies from the array
  itCompanies.slice(Math.floor(itCompanies.length / 2),Math.round(itCompanies.length / 2))

  //20. Remove the first IT company from the array
  itCompanies.splice(0, 1)

  //21. Remove the middle IT company or companies from the array
  itCompanies.splice(Math.floor(itCompanies.length / 2), 1)

  //22. Remove the last IT company from the array
  itCompanies.splice(itCompanies.length - 1, 1)

  //23. Remove all IT companies
  itCompanies.splice()