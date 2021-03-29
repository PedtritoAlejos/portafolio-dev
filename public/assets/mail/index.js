const nodemailer=require('nodemailer');
const {Router}=require('express');
const router=Router();
const {validationResult}=require('express-validator');
const validations=require('./validations');

//validate data and errors management
router.post('/send-mail',validations,async (req,res)=>{
    const errors =validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    //define variables from json recieved data
    const {username, userphone, usermail, usermessage}=req.body;
    res.json({message:'mensaje enviado'});
    console.log(req.body);

    //define nodemailer transporter with internal server data
    const transporter=nodemailer.createTransport({
        host:"imap.gmail.com",
        prtt: 993,
        secure:true,
        auth:{
            user:"codingbits666@gmail.com",
            pass:"C0d1ngB1tzK3y",
        },
        tls:{
            rejectUnauthorized:false
        }
    });
    //resending email promise
    const info=await transporter.sendMail({
        from:"'codingBits' <codingbits666@gmail.com>",
        to:"maulenadasmejose@gmail.com",
        subject:`hola, mi nombre es ${username} y me interesan sus servicios`,
        text:`
        telefono: ${userphone}
        correo: ${usermail}
        mensaje: ${usermessage}`
    });
    console.log('message sent',info.messageId);

});

module.exports=router;

