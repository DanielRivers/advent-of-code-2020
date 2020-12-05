const day4 = require('./inputs/day4').input.split('\n\n').map(v => v.replace(/\n/g," "))

const regex = /(?=.*byr:)(?=.*iyr:)(?=.*eyr:)(?=.*hgt:)(?=.*hcl:)(?=.*ecl:)(?=.*pid:)/gm;
const validPass1 = day4.filter(passport => {
  return regex.test(passport) 
})
console.log(validPass1.length) // 222
result = validPass1.filter(p => {
  const items = Object.fromEntries(p.split(' ').map(n=>n.split(':')))
  if (items.byr < 1920 || items.byr > 2002) return false
  if (items.iyr < 2010 || items.iyr > 2020) return false
  if (items.eyr < 2020 || items.eyr > 2030) return false
  if (items.hgt.includes('cm')) {
    if ((+items.hgt.split('cm')[0]) < 150 || (+items.hgt.split('cm')[0]) > 193) return false
  } else if (items.hgt.includes('in')) {
    if ((+items.hgt.split('in')[0]) < 59 || (+items.hgt.split('in')[0]) > 76) return false
  } else return false
  if (items.hcl.trim().length !== 7 || !/#[0-9a-f]{6}/.test(items.hcl)) return false;
  if (items.ecl.trim().length !== 3 ||!/(amb|blu|brn|gry|grn|hzl|oth)/.test(items.ecl)) return false
  if (items.pid.trim().length !== 9 || !/\d{9}/.test(items.pid)) return false
  return true

})
console.log(result.length)
