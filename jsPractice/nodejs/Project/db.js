const mysql2=require('mysql2')

const pool=mysql2.createPool({
    host:'localhost',
    user:'root',
    password:'Pramod@1272',
    database:'ecommerce',
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0,
    port:3306  //optional
})

module.exports=pool