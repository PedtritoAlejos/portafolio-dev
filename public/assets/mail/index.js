const nodemailer=require('nodemailer');
const {Router}=require('express');
const router=Router();



router.post('/send-mail', async (req,res)=>{
    const {username, userphone, usermail, usermessage}=req.body;
    res.json({message:'mensaje enviado'});
    console.log(req.body);
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
    const info=await transporter.sendMail({
        from:"'codingBits' <codingbits666@gmail.com>",
        to:"maulenadasmejose@gmail.com",
        subject:`hola, mi nombre es ${username} y me interesan sus servicios`,
        text:`telefono: ${userphone}\ncorreo: ${usermail}\nmensaje: ${usermessage}`
    });
    console.log('message sent',info.messageId);

});

module.exports=router;

