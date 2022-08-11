//asynchronous

const {readFile, writeFile} = require('fs')
//asynchronous can take the smallest time to operate for many users
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) =>{
    if(err){
        console.log(err)
        return
    }
    const first = result

    readFile('./content/second.txt', 'utf8', (err, result) =>{
        if(err){
            console.log(err)
            return 
        }
        const second = result

        writeFile(
            `./content/result-sync.txt`,
            `Here is the result: ${first}, ${second}`,
            (err,result) => {
                if (err){
                    console.error(err)
                    return
                }
               // console.log(result)
                console.log('done with the task')
            }
        )
        
    })

})

console.log('start with the task')

