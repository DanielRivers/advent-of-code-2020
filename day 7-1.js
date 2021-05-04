const day7 = require('./inputs/day7').input.split('\n')

let result = []
day7.forEach(bag => {
  result = bag.split('contain')[1].trim().split(', ').reduce((bags, p) => {
    const bagName = p.split(/ (.*)/)[1].split('.')[0].replace('bags', 'bag').trim()
    const isIn = bag.split('contain')[0].replace('bags', 'bag').trim()
    if (bags.find(b => b.bagName === bagName)) {
      bags.find(b => b.bagName === bagName).isIn.push(isIn)
    } else {
      bags.push({bagName, isIn: [isIn]});
    }
    return bags
  }, result)
})

const bagsIn = new Set()
const findContainers = (colour) => {
  if (!result.find(b =>b.bagName === colour)) return 0
  result.find(b =>b.bagName === colour).isIn.forEach((z) => {
    findContainers(z)
    bagsIn.add(z)
  })
}

findContainers('shiny gold bag')
console.log(bagsIn.size)