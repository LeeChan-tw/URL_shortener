// define sample function to randomly return an item in an array
function sample (array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define generateLink function
function generateLink () {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const pool = lowerCaseLetters + upperCaseLetters + numbers
  const ROOTDOMAIN = process.env.ROOTDOMAIN || 'http://localhost'
  // create a collection to store things user picked up
  let collection = []
  collection = collection.concat(pool.split(''))
  // start generating link
  let link = ''
  for (let i = 0; i < 5; i++) {
    link += sample(collection)
  }

  // return the generated link
  return `${ROOTDOMAIN}/${link}`
}

module.exports = generateLink()
