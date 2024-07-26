const express = require('express'); 
const port = 3000; 
const bodyparser = require('body-parser'); 
const app = express(); 

app.use(bodyparser.json()); 

app.get('/', function(req, res) {
    console.log(req.body); 
    res.send('Hello World'); 
})

app.listen(port); 