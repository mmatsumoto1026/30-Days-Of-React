const personAccount = {
    firstname : "John",
    lastName : "Taylor",
    incomes: {
      tutoring : "Teaching programmimg for beginners",
      WebDevelopment : "Create mobile web app by modern language",
      companyManagement : "Achieving our goals of updating world"
    },
    expenses: {
      knowledgeDevelopment : "Learning whole languages in web development environment",
      capitalInvestment : "Purchasing modern PCs, e-book and building a server",
      venueFee : "For holding classes to teach web development languages"
    },
    totalIncom: function() {

    },
    totalExpense: function() {

    },
    accountInfo: function() {

    },
    addIncome: function() {

    },
    addExpense: function() {

    },
    accountBalance: function() {

    }
}

const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
  ]
  
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
  ]

  const signUp = function(userName) {
    let existFlag = false
    for(let i = 0; i < users.length; i++){
      if(users[i].username === userName){
        console.log(`${userName} has already an account`)
        existFlag = true
      } else if(i === users.length - 1 && existFlag === false) {
        users.push({username: userName})
      }
    } 
  }
  signUp("Manabu")

  const signIn = function(userName) {
    for(let userInfo of users) {
      if(userInfo.username === userName) {
        userInfo.isLoggedIn = true;
      }
    }
  }
  signIn("Manabu")
  
  const rateProduct = function(productName, userHashId, rating) {
    for(let productInfo of products){
      if(productInfo.name === productName){
        productInfo.ratings.push({ userId : userHashId, rate : rating})
      }
    }
  }

  const averageRating = function(productName) {
    for(let productInfo of products){
      if(productInfo.name === productName){
        let sumRates = 0
        for(let raitingObj of productInfo.ratings){
          sumRates += raitingObj.rate
        }
        return sumRates / productInfo.ratings.length
      }
    }
  }
  rateProduct("TV", "fd45kl", 3.5)
  console.log(averageRating('mobile phone'))

  const likeProduct = function(productName,userHashId) {
    for(let productInfo of products){
      if(productInfo.name === productName && productInfo.likes.indexOf(userHashId) >= 0){
        productInfo.likes.splice(productInfo.likes.indexOf(userHashId),1)
      } else {
        productInfo.likes.push(userHashId)
      }
    }
  }

  likeProduct("mobile phone", "123456") // [ '123456']
  likeProduct("mobile phone", "123456") // []

