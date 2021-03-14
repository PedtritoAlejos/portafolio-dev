const {Router}=require('express');
const router=Router();

router.post('/send-mail',(req,res)=>{
    const {name, phone, email, message}=req.body;
    contentHTML=`
    <h1>User Information</h>
    <ul>
        <li>Username: ${name} </li>
        <li>User phone: ${phone} </li>
        <li>User email: ${email} </li>
        <li>User message: ${message} </li>
    </ul>
    `;
    res.send(contentHTML);

});

module.exports=router;

