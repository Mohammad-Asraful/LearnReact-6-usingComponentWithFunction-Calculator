// // // thepa technical react tutorial-22
const add = (a, b) => {
   let sum = a + b
   return sum
}

const sub = (a, b) => {
   let sum = a - b
   return sum
}

const mult = (a, b) => {
   let multiplication = a * b
   return multiplication
}

const div = (a, b) => {
   let division = a / b
   division = division.toFixed(2)
   return division
}

export default add;

export { sub, mult, div }