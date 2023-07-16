//Destructuring Object(means divide object into diffrent parts)

function ds(){
    const s1={
        name:"Pramod",
        age:24,
        address:"pune"
    }
    console.log(s1)

    const query=`insert into emp (name, age, address) values (${s1.name},${s1.age},${s1.address})`
    console.log(query)
    
    // I don't want to write s1 (s1.name) again and again for that we use destructuring\/

    const {name,age,address}=s1
    console.log(`name = ${name}`)
    console.log(`address = ${address}`)
    console.log(`age = ${age}`)
}
ds()