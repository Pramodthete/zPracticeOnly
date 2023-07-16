const rest=function(){
    const laptop={
        model:"E7270",
        company:"DELL",
        processor:"intel i7"
    }
    console.log(laptop)

    const laptop1={
        ...laptop,        // this is rest operator (get all data and then we can add into it)
        ram:"16gb",
        ssd:"512gb",
        screen:12.5
        //company:"HP"    //it will override Dell to HP
    }
    console.log(laptop1)
}
rest()