const {Router}=require('express');
const router=Router();

router.post('/send-mail',(req,res)=>{
    const {username, userphone, usermail, usermessage}=req.body;
    res.json({message:'mensaje enviado'});
    console.log(req.body);

});

module.exports=router;

