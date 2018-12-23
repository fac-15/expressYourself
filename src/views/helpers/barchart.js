
const barchart = (obj, field) => {

  // this gets skill level integer from user array item
  const num = obj && obj[field];

  // this converts number into a word
  const numbers = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five"
  }
  return numbers[num];

}

module.exports = barchart;