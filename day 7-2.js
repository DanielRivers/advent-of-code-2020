const day7 = require('./inputs/day7-test1').input.split('\n')

let result = []
day7.forEach(bag => {
  const bags = bag.split('contain')[1].trim().split(', ')
  result = bags.reduce((bags, p) => {
    let [ bagCount, bagName ] = p.split(/ (.*)/)
    bagName = bagName.split('.')[0].replace('bags', 'bag').trim()
    if (bagName === 'other bag') return bags
    const isIn = bag.split('contain')[0].replace('bags', 'bag').trim()
    if (bags.find(b => b.bagName === isIn)) {
      bags.find(b => b.bagName === isIn).holds.push( {bagName, bagCount})
    } else {
      bags.push({bagName: isIn, holds: [{bagName, bagCount}]});
    }
    return bags
  }, result)
})

const findContainers = (colour, multipier) => {
  if (!result.find(b =>b.bagName === colour)) return 0
  const bag = result.find(b =>b.bagName === colour)
  console.log(bag)
  return bag.holds.reduce((count, item) => {
    console.log(item.bagCount, multipier, findContainers(item.bagName, item.bagCount * multipier))
    count += (item.bagCount * multipier) + findContainers(item.bagName, item.bagCount * multipier)
    console.log(count)
  }, 0)
}

console.log(findContainers('shiny gold bag', 1))