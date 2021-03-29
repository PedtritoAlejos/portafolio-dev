const express = require('express')
const app = express()
require('dotenv').config();
const path = require('path');
const cors=require('cors');

const port=process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(require('./public/assets/mail/index'));
app.use(express.static(path.join(__dirname,'public')))
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})