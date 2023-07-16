const express=require('express')
const router=express.Router() //In express we have router
// And in router we have one table where we have all information about requests like which request,type of request,...
const db=require('./db')  //our db pool
const crypto=require('crypto-js')

router.post('/user/signup',(request,response)=>{
    const {firstName,lastName,phone,email,password}=request.body
// we have add into the string ( ''+ ) otherwise it will give bytes
const encryptedPass=''+ crypto.SHA256(password)

    const statement = `insert into user (firstName,lastName,phone,email,password) values('${firstName}','${lastName}','${phone}','${email}','${encryptedPass}')`

    db.execute(statement,(error,data)=>{

    const result={
        status:''
    }

        if(error != null){
            result['status']='error'
            result['error']=error
        }else{
            result['status']='success'
            result['data']=data
        }

        // if(error){
        //     console.log(`error = ${error}`)
        //     response.send('error')
        // }else{
        //     console.log(`result = ${JSON.stringify(result)}`)
             response.send(result)
        // }
    })
})
router.get('/user/info',(request,response)=>{

    const statement=`select * from user`

    db.execute(statement,(error,result)=>{
        if(error){
            console.log(error)
        }else{
            console.log(JSON.stringify(result))
            response.send(JSON.stringify(result))
        }
    })
})

router.post('/user/login',(request,response)=>{
    const {email,password}= request.body
    const encryptedPass=''+ crypto.SHA256(password)
    const statement=`select * from user where email='${email}'and password='${encryptedPass}'`

    db.execute(statement,(error,data)=>{
        const result={
            status:''
        }
        if(error !=null){
            result['status']='error'
            result['error']=error
            console.log('Invalid User')
        }else{
            if(data.length==0){
                result['status']='error'
                result['error']='User does not exist'
            }else{
                    const user=data[0]

                result['status']='success'

                result['data']={                   //only if we want to show this much data
                    firstName:user['firstName'],
                    lastName:user['lastName'],
                    email:user['email'],
                    phone:user['phone']
                }
                console.log('Valid User')

            }
            
            response.send(result)
        }
    })
})

module.exports=router