const day3 = require('./inputs/day3')

let top = 0, left = 0, trees = 0, totalTrees = []

let rowlength = day3.input[0].length 

slopes = [
  [1,1], [3,1], [5,1], [7,1], [1,2],
]

slopes.forEach(slope => {
  while (top < day3.input.length) {
    if (day3.input[top][left % rowlength] === '#') trees++;
    left = left + slope[0]
    top = top + slope[1];
  }
  totalTrees.push(trees)
  trees = top = left = 0
})

const result = totalTrees.reduce((tree, total) => {
  return total = total * tree;
})

console.log('result:', result)
