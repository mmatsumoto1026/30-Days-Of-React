function userIdGeneratedByUser() {
    let numOfChar = prompt('Enter your the number of characters:')
    let numOfIds = prompt('Enter your the number of ids:')
    if(/\D/g.test(numOfChar)) {
        console.log(`error: ${numOfChar} is not valid for the number of characters.`)
    } else if(/\D/g.test(numOfIds)) {
        console.log(`error ${numOfIds} is not valid for the number of characters.`)
    } else {
        let idStr = ""
        for(let i = 0; i < numOfIds; i++){
            for(let j = 0; j < numOfChar; j++){ 
                idStr += "H0zyabCcd5f4hI6eGws7g8DJ9rKEAuqNMLiB1Y2PSOpXFt3QmnxZWvljoRkTVU"[Math.floor(Math.random()*62)]
            }
            idStr += '\n'
        }
        return idStr
    }
}
console.log(userIdGeneratedByUser())

const generateColors = (colorCodeType, numOfColor) => {
    if(colorCodeType === 'hexa') {
        if(numOfColor === 1){
            let idStr = '#'
            for(let i = 0; i < 6; i++){ 
                idStr += "47d2fa6b95e0138c"[Math.floor(Math.random()*16)]
            }
            return idStr
        } else if (numOfColor > 1) {
            let generatedColorCode = []
            for(let i = 0; i < numOfColor; i++){
                let idStr = '#'
                for(let j = 0; j < 6; j++){ 
                    idStr += "a1802e37fd46c5b9"[Math.floor(Math.random()*16)]
                }
                generatedColorCode.push(idStr)
            }
            return generatedColorCode
        }
    } else if (colorCodeType === 'rgb') {
        if(numOfColor === 1){
            let idStr = 'rgb('
            for(let i = 0; i < 3; i++){ 
                idStr = idStr + Math.floor(Math.random()*255)
                if(i < 2) {
                    idStr += ', '
                }
            }
            idStr += ')'
            return idStr
        } else if (numOfColor > 1) {
            let generatedColorCode = []
            for(let i = 0; i < numOfColor; i++){
                let idStr = 'rgb('
                for(let j = 0; j < 3; j++){ 
                    idStr = idStr + Math.floor(Math.random()*255)
                    if(j < 2) {
                        idStr += ', '
                    }
                }
                idStr += ')'
                generatedColorCode.push(idStr)
            }
            return generatedColorCode
        }
    } else {
        console.log(`error ${colorCodeType} is not valid`)
    }
}
console.log(generateColors('hexa', 3))
console.log(generateColors('hexa', 1))
console.log(generateColors('rgb', 3))
console.log(generateColors('rgb', 1))


function shuffleArray(arr) {
    let shuffledArr = []
    let tempArr = []
    tempArr = tempArr.concat(arr)

    for(let i = 0; 0 < tempArr.length; i++){
        let randomElement = tempArr.splice(tempArr.length * Math.random(),1)
        shuffledArr[i] = randomElement.pop()
    }
    return shuffledArr
}
console.log(shuffleArray([1,2,3,4,5,6,7,8,9]))