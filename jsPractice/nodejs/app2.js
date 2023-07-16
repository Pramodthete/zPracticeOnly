const mysql2=require('mysql2')
const express=require('express')
const bodyParser=require('body-parser')// import body parser (Manditary for post)

const app=express()

//use bodyParser json to parse body from request body
const jsonParser=bodyParser.json()  //post will not work if this is not there
app.use(jsonParser)

app.post('/',(request,response)=>{
    
    console.log('inside post')
    console.log(request.body)

    const {title,description,price}=request.body
    const statement=`insert into product (title,description,price) values('${title}','${description}','${price}')`
    console.log(`statement = ${statement}`)

    const connection=mysql2.createConnection({
        host:'localhost',
        port:3306,
        user:'root',
        password:'Pramod@1272',
        database:'ecommerce'
    })
    
    connection.query(statement,(error,result)=>{
        //connection.end()
        if(error){
            console.log(`error=${error}`)
        }else{
            console.log(`result= ${JSON.stringify(result)}`)// if stringify is not there then it will give [Object,Object] output for this line
        }
        response.send(`response From Server`)
    })


})

app.listen(3000,'0.0.0.0',()=>{
    console.log('server start on 3000.........')
})