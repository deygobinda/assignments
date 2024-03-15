const fs = require('fs')

fs.readFile('3-read-from-file.md', 'utf-8',(err, data) =>{
    console.log(data)
})

const prevDate = new Date()

let a = 0 ;

for(let i =  0 ; i < 10000000000 ; i++){
    a += i;
}

console.log(a)
const time = (new Date() - prevDate) / 1000;
console.log(`Time taken ${time}`)