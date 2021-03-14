const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(require('./public/assets/mail/index'));

app.use(express.static(path.join(__dirname,'public')))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})