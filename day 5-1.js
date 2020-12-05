const day5 = require('./inputs/day5').input.split('\n')

let rMax, rMin, cMax, cMin

console.log(day5.reduce((val, pass ) => {
  rMax = 127
  rMin = 0
  cMax = 7
  cMin = 0

  const  passArray = Array.from(pass)
  passArray.slice(0, 7).forEach(letter => {
    (letter === 'F') ? rMax -= Math.ceil((rMax - rMin) / 2) : rMin += Math.ceil((rMax - rMin) / 2)
  })
  passArray.slice(7, 10).forEach(letter => {
    (letter === 'L') ? cMax -= Math.ceil((cMax - cMin) / 2) : cMin += Math.ceil((cMax - cMin) / 2)
  })
  return Math.max(rMax * 8 + cMax, val)
}, 0))