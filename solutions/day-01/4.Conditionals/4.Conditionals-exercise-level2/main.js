let score = prompt('Enter your exam score:')
score >= 80 && score <= 100 ? console.log("Marvelous! your grade is A!")
    : score >= 70 && score <= 79 ? console.log("Great! your grade is B!")
    : score >= 60 && score <= 69 ? console.log("Good! your grade is C.")
    : score >= 50 && score <= 59 ? console.log("OK. your grade is D.")
    : score >= 0 && score <= 49 ? console.log("Try again. your grade is E.")
    : console.log(`${score} is not exam score.`)

let monthOfTheYear = prompt('Enter a month of the year:')
if (monthOfTheYear === "September" || monthOfTheYear === "October" || monthOfTheYear === "November") {
    console.log("The season is Autumn.")
} else if (monthOfTheYear === "December" || monthOfTheYear === "January" || monthOfTheYear === "February") {
    console.log("The season is Winter.")
} else if (monthOfTheYear === "March" || monthOfTheYear === "April" || monthOfTheYear === "May") {
    console.log("The season is Spring.")
} else if (monthOfTheYear === "June" || monthOfTheYear === "July" || monthOfTheYear === "August") {
    console.log("The season is Summer.")
} else {
    console.log(`${monthOfTheYear} is not a month of the year.`)
}

const DayOfTheWeek = prompt('Enter a day of the week:')
const loweredInput = DayOfTheWeek.toLowerCase()
let tempArr = loweredInput.split("")
tempArr[0] = tempArr[0].toUpperCase()

switch(loweredInput) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday": 
        console.log(`${tempArr.join("")} is a working day.`)
        break;
    case "saturday":
    case "sunday":
        console.log(`${tempArr.join("")} is a weekend.`)
        break;
    default:
        console.log(`${tempArr.join("")} is not a day of the week.`)
}