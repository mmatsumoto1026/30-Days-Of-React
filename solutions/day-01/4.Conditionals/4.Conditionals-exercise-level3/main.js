const NumberOfDaysInAMonth = {
"january" : 31,
"february" : 28,
"march" : 31,
"april" : 30,
"may" : 31,
"june" : 30,
"july" : 31,
"august" : 31,
"september" : 30, 
"october" : 31,
"november" : 30, 
"december" : 31
}

let year = prompt('Enter a year:')
let monthOfTheYear = prompt('Enter a month:')

monthOfTheYear = monthOfTheYear.toLowerCase()
if(NumberOfDaysInAMonth.hasOwnProperty(monthOfTheYear)){
    if(!/\D/.test(year) && year > 0){
        let tempArr = monthOfTheYear.split("")
        tempArr[0] = tempArr[0].toUpperCase()

        // number of days in february of leap year is 29
        if(monthOfTheYear === "february" && year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            console.log(`${tempArr.join("")} of ${year} has 29 days.`)
        } else {
            console.log(`${tempArr.join("")} of ${year} has ${NumberOfDaysInAMonth[monthOfTheYear]} days.`)
        }
    } else {
        console.log(`${year} is not a valid number.`)
    }
} else {
    console.log(`${tempArr.join("")} is not a month of the year.`)
}

