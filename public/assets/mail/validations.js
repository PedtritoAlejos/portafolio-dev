const {body}=require('express-validator');

//express validator structure
var validations=[
    [
        body('username',`name must have between 2-20 only alphabet letters`)
        .matches(/^[A-Za-z]{2,20}( )?([A-Za-z]{2,20})?$/)
    ],
    [
        body('userphone',`startline must be 9 follow by 8 ONLY numeric characters`)
        .matches(/^(\+)?(56)?(9{1})(\d{8})$/)
    ],
    [
        body('usermail',`email can't have special characters exepts '@'`)
        .matches(/^[a-zA-Z0-9-_.]{2,30}[@]{1,1}[a-zA-Z0-9-_.]{2,30}$/)
    ],
    [
        body('usermessage',`must have only alphanumeric between 2-450`)
        .matches(/^[a-zA-Z0-9-_.,"\n'\(\)\ ]{2,450}$/)
    ]
]

module.exports=validations;