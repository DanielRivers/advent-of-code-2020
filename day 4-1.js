const day4 = require('./inputs/day4').input.split('\n\n').map(v => v.replace(/\n/g," "))
const regex = /(?=.*byr:)(?=.*iyr:)(?=.*eyr:)(?=.*hgt:)(?=.*hcl:)(?=.*ecl:)(?=.*pid:)/gm;
const result = day4.filter(passport => {
  return regex.test(passport) 
})
console.log(result.length)
