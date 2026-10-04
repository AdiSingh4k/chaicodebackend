require('dotenv').config()

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4040;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter' , (req, res)=>{
    res.send('adityadotcom')
})
app.get('/login',(req, res)=>{
    res.send('<h1>please login at dashboard</h1>')
});
app.get('/youtube', (req, res)=>{
    res.send("<h2> this is the youtube channe</h2>")
})
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


 