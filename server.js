const express = require('express');


const app =express();
const nodemailer = require("nodemailer");

const log =console.log;

const port = process.env.PORT || 5000;

//Middleware
app.use(express.static('public'));

app.use(express.json());

app.get('/', (req,res)=>{

    res.sendFile(__dirname +'/public/contactform.html');
});
app.post('/',(req , res)=>{
    log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'preciousagamuyi@gmail.com',
            pass: 'Uniquerexlove4004'
        }
    })
    const mailOptions ={
        from: req.body.email,
        to: 'preciousagamuyi@gmail.com',
        subject:`Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }
    transporter.sendMail(mailOptions,(error, info)=>{
        if(error){
           log(error);
           res.send('error');
        }else{
            log('Email sent:'+ info.response);
            res.send('success');

        }
    })
});




app.listen(port, () => {log('server listening on port ' + port)});