function sum(a, b) {
    return a + b;
}

function doArithmetic(a, b, fun){
    return fun(a, b)
}

const ans1 = doArithmetic(5, 10, sum);

console.log(ans1);