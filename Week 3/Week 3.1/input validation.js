const express = require('express');
const app = express(); 

app.use(express.json()); 

app.post('/health-checkup', function(req, res) {
    const kidenys = req.body.kidenys; 
    if(!kidenys) {
        res.json({
            message: "Invalid input", 
        });
    }
    const kidneyLength = kidenys.length; 
    res.send("You have" + kidneyLength + "kidneys"); 
}); 

app.listen(3030); 