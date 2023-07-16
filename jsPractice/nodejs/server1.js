
const http=require('http')

const server= http.createServer((request,response)=>{

    console.log('request is received')
    //console.log(request)
    console.log(`method type = ${request.method}`)
    console.log(`current url = ${request.url}`)

    //we can write code here to do get,put,post,delete methods (with help of express)

    //but this is not way to do it
    if(request.url=='/person'){
        console.log(`method type = ${request.method} Yaaaay`)
    }
    if(request.method=='GET'){
        console.log('select * from person')
    }

    const person={
        name:'Pramod',
        age:24,
        address:'Pune'
    }

    const strPerson=JSON.stringify(person)

    response.end(strPerson)
})

server.listen(3000,'0.0.0.0',()=>{
    console.log('Starting Server')
})