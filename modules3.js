//CommomJS, evey file is a module in node js (by default)
//MODULES- Encapsulated code ( only share minimum)

const names = require('./nameModule4')
// console.log(names)

const sayHi = require('./utils5')
const data = require(`./alternativeflavor6`)

console.log(data)

require('./alternativeflavor7')

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)

