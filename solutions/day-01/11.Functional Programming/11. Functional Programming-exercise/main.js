  const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
   ]
  products.forEach(productObj => {
    const {product, price} = productObj
    if(typeof price === 'number'){
        console.log(price)
    }
  })

  products.forEach(productObj => {
    let {product, price} = productObj
    if(typeof price !== 'number'){
        price = 'unknown'
    }
    console.log(`The price of ${product} is ${price}.`)
  })

  let sum = 0
  products.forEach(productObj => {
    const {product, price} = productObj
    if(typeof price === 'number'){
        sum += price
    }
  })
  console.log(sum)


  const prices = products.map(function ({product, price}) {
    if(typeof price !== 'number'){
        price = 'unknown'
    }
    return price
  })
  console.log(prices)


  const filteredProducts = products.filter(function ({product, price}) {
    if(typeof price === 'number'){
        return product
    }
  })
  console.log(filteredProducts)

  const callbackForMap = ({product, price}) => {
    if(typeof price !== 'number'){
        price = 'unknown'
    }
    return price
  }
  const callbackForFilter = (price) => {
    if(typeof price === 'number'){
        return price
    }
  }
  const callbackForReduce = (acc, price) => {
    return acc += price
  }
  const sumPrice = products.map(callbackForMap).filter(callbackForFilter).reduce(callbackForReduce, 0)
  console.log(sumPrice)


  const callbackReduceMap = (acc, productObj, id) => {
    acc[id] = productObj.price;
    return acc
  }
  const callbackReduceFilter = (acc, price, id) => {
    if(typeof price === 'number'){
        acc.push(price)
    }
    return acc
  }
  const sumPriceByReduceOnly = products.reduce(callbackReduceMap, []).reduce(callbackReduceFilter, []).reduce(callbackForReduce, 0)
  console.log(sumPriceByReduceOnly)


  const firstPricelessProduct = products.find(({product, price}) => typeof price !== 'number')
  console.log(firstPricelessProduct)


  const firstPricelessProductIndex = products.findIndex(({product, price}) => typeof price !== 'number')
  console.log(firstPricelessProductIndex)


  const someArePriceless = products.some(({product, price}) => typeof price !== 'number')
  console.log(someArePriceless)

  
  const AllHavePrice = products.every(({product, price}) => typeof price === 'number')
  console.log(AllHavePrice)


  const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']
  const newCountriesByForEach = []
  countries.forEach((country) => newCountriesByForEach.push(country)) // do expression on each element of array
  console.log(newCountriesByForEach)
  const newCountriesByMap = countries.map((country) => country) // create new array with mapped array elements
  console.log(newCountriesByMap)
  let newCountriesFiltered = countries.filter((country) => !country.includes('land')) // create new array with filtered array elements
  console.log(newCountriesFiltered)
  const newCountriesreduced = countries.reduce((acc,country) => {
      if(!country.includes('land')){
          acc.push(country)
      }
      return acc
    },[]) // from initial value, acc is pushed evaluated element of array every time the method invoke each array element
  console.log(newCountriesreduced)


  newCountriesFiltered = countries.filter((country) => !country.includes('land')) // create new array with filtered array elements
  console.log(newCountriesFiltered)
  const firstLandlessCountry = countries.find((country) => !country.includes('land')) // find first evaluation-matched element of array and return the element
  console.log(firstLandlessCountry)
  const firstLandlessCountryIndex = countries.findIndex((country) => !country.includes('land')) // find first evaluation-matched element of array and return the element's index
  console.log(firstLandlessCountryIndex)


  const someAreLandless = countries.some((country) => !country.includes('land')) // serch evaluation-matched element in array and if there is, return true
  console.log(someAreLandless)

  
  const AllLandless = countries.every((country) => !country.includes('land')) //evaluate all element is matched with expression and if so, return true
  console.log(AllHavePrice)