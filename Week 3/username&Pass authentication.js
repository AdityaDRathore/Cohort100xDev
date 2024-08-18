const express = require('express');

const app = express(); 

app.get('/health-checkup', function(req, res) {
    const kidneyId = req.headers.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password; 

    if(username != "Aditya" || password != "pass1234") {
        res.status(403).json({
            message: "User doesn't exist",
        });
        return; 
    };

    if(kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({
            message: "Wrong input", 
        });
        return; 
    }

    res.send("You body is healthy"); 
})

app,listen(3030); 