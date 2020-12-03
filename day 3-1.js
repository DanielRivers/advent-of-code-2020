const day3 = require('./inputs/day3')

let top = 0, left = 0, trees = 0, totalTrees = []
let rowlength = day3.input[0].length 

day3.input.forEach(() => {
  if (day3.input[top][left % rowlength] === '#') trees++;
  top = top + 1;
  left = left + 3
})
console.log(trees)