
const pi=3.14

function add(num1,num2){
    console.log("1")
    return num1+num2
}
function subtract(num1,num2){
    console.log("2")
    return num1-num2
}
function multiply(num1,num2){
    console.log("3")
    return num1*num2
}
function add(num1,num2){   //in this always last add function will execute
    console.log("4")
    return num1+num2
}
//console.log(add(12,12))

//console.log(module)

module.exports = {
    madd:add,
    mmultiply:multiply,
    msubtract:subtract,
    mpi:pi
}
