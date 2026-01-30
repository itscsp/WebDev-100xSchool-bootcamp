const fs = require('fs');

function fileFeadCallback(err, contents) {
    if(err){
        console.log('Error: ', err)
        return;
    }
    console.log(contents);
}

fs.readFile('a.txt', "utf-8", fileFeadCallback);

let sum = 0;
for(let i =0; i < 1000; i++) {
    sum+=1
}

console.log(sum);
