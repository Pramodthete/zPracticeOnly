//Even Odd
const even=p=>p%2==0?'even':'odd'
console.log(even(19))

//Square of all array
const func=function(){
    const arr=[1,2,3,4,5,6,7,8,9,10]
   
    const narr=[]
    for(const a of arr){
        console.log("square= ",a**2)     // print squares one by one
        narr.push(a**2)               // push method use to push the element in new array
    }
    console.log("push into new Array= ",narr)             // print array
}
func()

// squares with *map* function
const func2=function(){
    const arr=[1,2,3,4,5,6,7,8,9,10]
   console.log("Initial Array= ",arr)

    const sq=arr.map(n=>n **2)    // use map function to iterate array And in that we use lambda
    console.log("Using Map Array= ",sq)              //print array
}
func2()

console.log("\nConvert temperature farenite into celcius ")
const func3=function(){
    const temp_f=[90,98,92,93,95,96,97]
    console.log("Farenite= ",temp_f)
    const temp_c=temp_f.map(r=>(r-32)*(5/9))
    console.log("Celcius= ",temp_c)
}
func3()
