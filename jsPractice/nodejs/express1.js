
const express=require('express')

const app=express()

app.get('/product',(request,response)=>{             // we do post,put,delete
    console.log('inside a route for GET/product')
    response.end('Response send from express')
})

app.listen(3000,'0.0.0.0',()=>{
    console.log('Starting server 3000....')
})

//npm install nodemon -g   => this automatically restart server so no need to restarting again and again whenever change you do
// but after this command we have run server like this => nodemon express1.js
