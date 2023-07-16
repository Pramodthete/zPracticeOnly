//Even an odd
// if condition get true filter will return current iteration value 

const even=function(){
    const arr=[11,22,33,44,55,66,77]
    const r=arr.map(n=>n%2==0)
    const e= arr.filter(n=>n%2==0)

    const squareOfEven= 
            arr.filter(n=>n%2==0)
            .map(i=>i**2)

    console.log("map=> ",r)        // when there is true filter get that value
    console.log("filter=> ",e)
    console.log("Map and filter(square of even numbers)=> ",squareOfEven)
    
                                                                                // var p=0;
                                                                                // var p=10;
                                                                                // console.log(p);
                                                                                
    let s="";
    for(let a=0;a<10;a++){
        s+=a + " ";
    }
    console.log(s);
}
even()