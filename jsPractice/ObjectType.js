const fun1=function(){
    const person={
        name:"Pramod",
        age:24,
        branch:"Civil"
    }
    console.log(person)
    console.log(typeof person)
}
fun1()

const fun2=function(){
    const p1=[
        {name:"Nikhil",age:24,branch:"Mechanical"},
        {name:"Rushikesh",age:24,branch:"Electrical"},
        {name:"Shubhanshu",age:26,branch:"Electronics"},
        {name:"Pranav",age:26,branch:"Electrical"},
        {name:"Vaibhav",age:26,branch:"Electriacal"}
    ]
    console.log(p1)
    console.log(typeof p1)

    //Interpolation => (`....`) backTik used
    p1.forEach(e => {
        console.log(`name:${e['name']}, age:${e.age}`)
    });      //   these are two types of printing values => ${e['name']}  or  ${e.name}

    //with help of backTik we can do calculations
     num1=10
     num2=20
    console.log(`adding ${num1} + ${num2} = ${num1 + num2}`)
}
fun2()

const fun3=function(){
    const p1=[
        {name:"Nikhil",age:24,branch:"Mechanical"},
        {name:"Rushikesh",age:24,branch:"Electrical"},
        {name:"Shubhanshu",age:26,branch:"Electronics"},
        {name:"Pranav",age:26,branch:"Electrical"},
        {name:"Vaibhav",age:26,branch:"Electriacal"}
    ]

    //const p2=[]

    // for(const p of p1){       //push into another array
    // p2.push({
    //     name:p.name,
    //     age:p.age,
    // })
    // }

    const p2=p1.map(e =>{       // save into another array
        // if(e.age==24) => give undefined for other values(which are not return)
        if(e.age==26)
        return  {name:e.name, age:e.age}
        })
    
    console.log(p2)
}
fun3()
