/**
 * Creating custom promises for read file
 */
const fs = require('fs');
const { resolve } = require('path');

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

// readFilePromisified('a.txt', 'utf-8')
//     .then(function(res){
//         console.log(res)
//     })
//     .catch(function(err){
//         console.log(err)
//     })

/**
 * Create promises for setTimeout
 */

function timeoutPromisefied(delay){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, delay)
    })
}

timeoutPromisefied(1000)
    .then(function(){
        console.log("Hello");
    })