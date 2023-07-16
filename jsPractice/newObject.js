//One of the way to create object \/
function fun(){   // Object is a root function given by JS
    const person=new Object()
    person.name="Pramod"
    person.age=24
    person.address="Pune"

    console.log(person)

    // add in object
    const nic={
        name:'nikhil',
        age:23
    }
    nic['color']='Blue';
    console.log(nic);

    

    const car=new Object()
    car.model="i-20"
    car.company="hyundai"
    car.price=750000

    console.log(car)
    
}
fun()

// create object with constructor (always uppercase first letter of constructor)
function Person(name,age,address){
    this.name=name
    this.age=age
    this.address=address
}
const p1=new Person('vicky',20,'Pune')
console.log(p1)
const p2=new Person('Anchal',18,'Pune')
console.log(p2)