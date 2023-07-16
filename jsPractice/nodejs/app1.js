//import express
const express= require('express')

//import mysql2
const mysql2=require('mysql2')

//create express instance
const app = express()

//route
app.get('/product',(request,response)=>{
    //connect to mysql2 db and open connection
    const connection=mysql2.createConnection({
        host:'0.0.0.0',
        user:'root',
        password:'Pramod@1272',
        database:'ecommerce',
        port:3306
    })

    //prepare statement to execute the select query
    const statement = `select id,title,description,price from product`

    //get data from db
    connection.query(statement,(isError,products)=>{ //its like (request , response)
        console.log(isError)//null
        console.log(products) // in json

        const strProducts=JSON.stringify(products)
        console.log(strProducts)   // in string
        
        response.end(strProducts)
    })
})

app.listen(3000,'0.0.0.0',()=>{
    console.log('server starting on 3000.....')
})