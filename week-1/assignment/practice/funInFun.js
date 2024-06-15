function add(firstEL,secondEl) {
    add = firstEL + secondEl
    return add
}

function sub(firstEL,secondEl) {
    sub = firstEL - secondEl
    return sub
}

function mul(firstEL,secondEl) {
    mul = firstEL * secondEl
    return mul
}

function div(firstEL,secondEl) {
    div = firstEL / secondEl
    return div

    // or 
    // return firstEL / secondEl
    
}

function doArithmatic(firstEL, secondEl , ArithmaticFun) {
    return ArithmaticFun(firstEL,secondEl)
}

console.log(doArithmatic(10,20,div))