// setTimeout(() => {
//     console.log("Hello")
//     setTimeout(() => {
//         console.log("Hi there")
//         setTimeout(() => {
//             console.log('How are you')
//         }, 2000)
//     }, 3000)
// }, 1000)

// function call3(){
//     console.log("How are you");
// }


// function call2(){
//     console.log("Hi there");
//     setTimeout(call3, 2000)

// }


// function call1(){
//     console.log("Hello");
//     setTimeout(call2, 3000)

// }

// setTimeout(call1, 1000)


function callbackPromisefied(ms) {
    return new Promise((res, rej) => {
        setTimeout(res, ms)
    })
}

callbackPromisefied(1000).then(() => {
    console.log("Hello")
    return callbackPromisefied(3000)
}).then(() => {
    console.log("Hi there");
    return callbackPromisefied(2000)  
}).then(() => {
    console.log("How are you");
})

