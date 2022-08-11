//synchronous
//destructuring the function is the same as the code below
const {readFileSync, writeFileSync} = require('fs')
//synchronous will break if there are many 
console.log('Start')
const first = readFileSync('./Content/first.txt', 'utf8')
const second = readFileSync('./Content/second.txt', 'utf8')

console.log(first, second)

//This will create a new file if there is not one and override the file if it exists with the command in the writeFileSync
// writeFileSync(
//     `./content/result-sync.txt`,
//     `Here is the result: ${first}, ${second}`,
// )

writeFileSync(
    `./content/result-sync.txt`,
    `Here is the result: ${first}, ${second}`,
    {flag : 'a'}//flag a will append the content code in the writeFileSync to the end of the file
)

console.log('Done with this task')
console.log('starting with the next one')

//same as the code above
 //const fs = require('fs')
// fs.readFileSync()
// fs.writeFileSync()

