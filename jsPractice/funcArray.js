function add(num1,num2){
    console.log("Addition=",num1+num2)
}
function subtract(num1,num2){
    console.log("Subtraction=",num1-num2)
}
function multiply(num1,num2){
    console.log("Multiply=",num1*num2)
}
function divide(num1,num2){
    console.log("Divide",num1/num2)
}


//for of loop
function arr(){
    console.log("for of loop")
    const funcArr=[add,subtract,multiply,divide]
    for(const func of funcArr){
        func(1,2)
        func(2,3)
        func(6,3)
        func(0,0)
    }

    console.log("\nfor loop")
    for(let i=0;i<funcArr.length;i++){
        add(i,i-1)
        subtract(i,i-1)
        multiply(i,i)
        divide(i,i-1)
    }
}
arr()