const arr= [10,20,30,40,50]
let i=0;
// whenEver we write function internally it write like this
// const a = function(p){
    
//     return arr[i] ** 2
// }

// ||
// \/

// anonymous function
// const a = (p)=>{
    
//     return arr[i] ** 2  // ** means power-of
// }

//lambda function
const a = (p)=>p ** 2  // ** means power-of

console.log("type of reference=",typeof a)
console.log(a(arr[i]))
console.log(a(arr[i+1]))