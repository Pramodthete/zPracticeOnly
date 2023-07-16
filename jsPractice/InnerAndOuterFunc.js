function outer(){

    console.log("outer func")

    const num=10;
    //console.log(n)   cannot access from inner function

    function inner(){
     //   const n=20  
        console.log("inner func")
        console.log(num) // here we can access
    }
    inner()
}
//console.log(num)   not allowed( not access)
outer()