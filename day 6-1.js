const day5 = require('./inputs/day6').input.split('\n\n').map(v => v.replace(/\n/g,''))

console.log(day5.reduce((total, p)  => { return  total + new Set(Array.from(p)).size }, 0))
