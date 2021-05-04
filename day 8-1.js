const day8 = require('./inputs/day8').input.split('\n')

let position = 0, acc = 0
const visited = []

while (!visited.includes(position)) {
  let [command, mod] = day8[position].split(' ')
  visited.push(position)
  mod = +mod
  if (command === 'nop') {
    position++
  } else if (command === 'acc') {
    acc = acc + mod
    position++
  } else {
    position = position + mod
  }
}

console.log(acc, position)