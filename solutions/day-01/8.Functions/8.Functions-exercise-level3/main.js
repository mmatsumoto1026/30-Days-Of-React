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