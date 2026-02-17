/**
 * Creating custom promises for read file
 */
const fs = require('fs');

function readFilePromisified(filePath, encoded) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filePath, encoded, (err, res) => {
            if(err) {
                reject(err)
            }else{
                resolve(res)
            }
        })
    })
}

readFilePromisified('a.txt', 'utf-8')
    .then(function(res){
        console.log(res)
    })
    .catch(function(err){
        console.log(err)
    })