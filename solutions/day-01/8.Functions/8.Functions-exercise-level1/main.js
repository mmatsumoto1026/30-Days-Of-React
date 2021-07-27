function fullName(firstName, lastName) {
    return firstName + ' ' + lastName
}
console.log("John", "Denver")


function addNumbers(numOne, numTwo) {
    return numOne + numTwo
}
console.log(addNumbers(2, 3))


const _areaOfCircle = (r) => {
    return Math.PI * r * r
}
console.log(_areaOfCircle(10))


const convertCelciusToFahrenheit = (TempInoC) => {
    return (TempInoC * 9 / 5) + 32
}
console.log(convertCelciusToFahrenheit(30))


function bmi(weight, height) {
    let bodyMassIndex = weight / (Math.pow(height, 2))
    bodyMassIndex = Math.round(bodyMassIndex)
    return bodyMassIndex < 18.5 ? "Underweight"
            : bodyMassIndex >= 18.5 && bodyMassIndex <= 24.9 ? "Normal weight"
            : bodyMassIndex >= 25 && bodyMassIndex <= 29.9 ? "Overweight"
            : "Obese"
}
console.log(bmi(58, 1.72))


function checkSeason(nameOfMonth) {
    if(/September|October|November/.test(nameOfMonth)){
        return "Autumn"
    } else if(/December|January|February/.test(nameOfMonth)){
        return "Winter"
    } else if(/March|April|May/.test(nameOfMonth)){
        return "Spring"
    } else if(/June|July|August/.test(nameOfMonth)){
        return "Summer"
    } else {
        return `${nameOfMonth} is not a name of month.`
    }
}
console.log(checkSeason("July"))