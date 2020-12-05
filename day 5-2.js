const day5 = require('./inputs/day5').input.split('\n')

let rMax, rMin, cMax, cMin

const seats = day5.map(pass => {
  rMax = 127
  rMin = 0
  cMax = 7
  cMin = 0

  const passArray = Array.from(pass)
  passArray.slice(0, 7).forEach(letter => {
    (letter === 'F') ? rMax -= Math.ceil((rMax - rMin) / 2) : rMin += Math.ceil((rMax - rMin) / 2)
  })
  passArray.slice(7, 10).forEach(letter => {
    (letter === 'L') ? cMax -= Math.ceil((cMax - cMin) / 2) : cMin += Math.ceil((cMax - cMin) / 2)
  })
  return rMax * 8 + cMax
}, 0)

seats.forEach(item => {
  if (!seats.includes(item + 1)) {
    console.log(item + 1)
  }
  if (!seats.includes(item - 1)) {
    console.log(item - 1)
  }
})

// The result is the number that appears twice
