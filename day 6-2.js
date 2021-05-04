const day5 = require('./inputs/day6').input.split('\n\n')

console.log( day5.map(p => { 
  const people = p.split('\n').length
  p = Array.from(p.replace(/\n/g,''))
  return new Set(p.filter(item => p.filter(find => find === item).length === people ))
}).reduce((total, p) => total + p.size,0))
