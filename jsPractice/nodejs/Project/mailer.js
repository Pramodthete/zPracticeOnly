const nodemailer= require('nodemailer')   // this code not working

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'testing.snb@gmail.com',
        pass:'snb#9Test',
    },
})

var mailOptions={
    from:'testing.snb@gmail.com',
    to:'pramodthete05@gmail.com',
    subject:'sending email programatically using nodeJS (nodemailer)',
    text:'There is no Tommorrow study now'
}

transporter.sendMail(mailOptions,function (error,info){
    if(error){
        console.log(error)
    }else{
        console.log('Email sent: '+info.response)
    }
})