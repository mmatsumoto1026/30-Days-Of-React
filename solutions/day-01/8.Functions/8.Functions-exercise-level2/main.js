function solveQuadratic(a, b, c) {
    let result = []
    if(/undefined/.test(a)|/undefined/.test(b)|/undefined/.test(c)){
        return 0
    } else if(Math.pow(b, 2) - 4 * a * c === 0){
        result[0] = -b / (2 * a)
    } else {
        result[0] = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)
        result[1] = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)
    }
    return result
}


function printArray(arr) {
    for(let element of arr) {
        console.log(element)
    }
}
printArray([1, 2, 3, 4, 5])


const showDateTime = () => {
    const now = new Date()
    return `${("0"+(now.getMonth() + 1)).slice(-2)}/${("0"+(now.getDay())).slice(-2)}/${now.getFullYear()} ${("0"+(now.getHours())).slice(-2)}:${("0"+(now.getMinutes())).slice(-2)}`
}
console.log(showDateTime())


function swapValues(x, y) {
    let result = {}
    result.x = y
    result.y = x
    return result
}
console.log(swapValues(3, 4))


function reverseArray(arr) {
    let reversedArr = []
    for(let i = arr.length - 1; i >= 0; i--){
        reversedArr.push(arr[i])
    }
    return reversedArr
}
console.log(reverseArray([1, 2, 3, 4, 5]))
console.log(reverseArray(['A', 'B', 'C']))


function capitalizeArray(arr) {
    let capitalizedArr = []
    for(let elementStr of arr) {
        capitalizedArr.push(elementStr.toUpperCase())
    }
    return capitalizedArr
}
console.log(capitalizeArray(["Germany", "Finland", "Japan", "South Afria", "Canada"]))


function addItem(Item, arr) {
    let addedArr = []
    addedArr = addedArr.concat(arr)
    addedArr.push(Item)
    return addedArr
}
console.log(addItem("Coffee", ["Orange juice", "Smoothie"]))


function removeItem(index, arr) {
    let removedArr = []
    removedArr = removedArr.concat(arr)
    removedArr.splice(removedArr.indexOf(index), 1)

    return removedArr
}
console.log(removeItem("Orange juice", ["Orange juice", "Smoothie", "Coffee"]))


function evensAndOdds(positiveInteger) {
    let oddsCount = 0
    let evensCount = 0
    if(positiveInteger < 0) {
        return `${positiveInteger} is not a positive integer.`
    } else {
        for(let i = 0; i <= positiveInteger; i++) {
            if(i % 2 === 0) {
                evensCount++;
            } else {
                oddsCount++;
            }
        }
        return `The number of odds are ${oddsCount}.\nThe number of evens are ${evensCount}.`
    }
}
console.log(evensAndOdds(100))


function sum() {
    let sum = 0
    for(let argument of arguments) {
        sum += argument
    }
    return sum
}
console.log(sum(1, 2, 3))
console.log(sum(1, 2, 3, 4))


function userIdGenerator() {
    let idStr = ""
    for(let i = 0; i < 7; i++){ 
        idStr += "H0zyabCcd5f4hI6eGws7g8DJ9rKEAuqNMLiB1Y2PSOpXFt3QmnxZWvljoRkTVU"[Math.floor(Math.random()*62)]
    }
    return idStr
}
console.log(userIdGenerator())