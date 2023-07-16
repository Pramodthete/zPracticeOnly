function add(num1,num2){
    console.log(num1+num2)
}
function subtract(num1,num2){
    console.log(num1-num2)
}
function multiply(num1,num2){
    console.log(num1*num2)
}
function divide(num1,num2){
    console.log(num1/num2)
}

function math(fun){
    fun(10,20)
    fun(20,20)
    fun(40,20)
}
console.log("Addition")
math(add)
console.log("Subtraction")
math(subtract)
console.log("Multiplication")
math(multiply)
console.log("Division")
math(divide)