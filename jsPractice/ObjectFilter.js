const fun4=function(){
    const p1=[       // Object Array
        {name:"Nikhil",age:24,branch:"Mechanical"},
        {name:"Rushikesh",age:24,branch:"Electrical"},
        {name:"Shubhanshu",age:26,branch:"Electronics"},
        {name:"Pranav",age:26,branch:"Electrical"},
        {name:"Vaibhav",age:26,branch:"Electriacal"}
    ]
    const p2=p1.filter(e=>e.age==24)   //filter not give undefined like map
    console.log(p2)
}
fun4()