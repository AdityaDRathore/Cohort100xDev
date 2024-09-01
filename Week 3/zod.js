const express = require('express'); 
const zod = require('zod'); 
const app = express(); 

/*
    {
        email: @__.com
        password : 8 letters
        country : IN || US
    }
 */

const schema = zod.object({
    email: zod.string().email(), 
    password: z.string().min(8), 
    country: z.literal("IN").or(z.literal('US')),
    kidneys: z.array(z.number())  
})


app.use(express.json()); 

app.post('/health-checkup', function(req, res) {
    const kidneys = req.body.kidneys; 
    const response = schema.safeParse(kidneys); 
    const kidneyslenth = kidneys.length;
    if(!response.success){
        res.status(411).json({
            message : "Invalid output"
        })
    } 
    else 
    res.send({
        response
    }); 
}); 

app.listen(3030); 
