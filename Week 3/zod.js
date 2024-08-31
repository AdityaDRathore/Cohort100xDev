const express = require('express'); 
const zod = require('zod'); 
const app = express(); 

const schema = zod.array(zod.number()); 

app.use(express.json()); 

app.post('/health-checkup', function(res, req) {
    const kidneys = req.body.kidneys; 
    const response = schema.safeParse(kidneys); 
    const kidneyslenth = kidneys.length; 
    
    res.send({
        response
    }); 
}); 

app.listen(3030); 
