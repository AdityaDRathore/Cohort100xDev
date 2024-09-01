const express = require('express');

const app = express(); 

let numberOfReq = 0; 
function calculateReq(req, res, next) {
    numberOfReq++; 
    console.log(numberOfReq);
    next(); 
}
app.use(calculateReq); 

function usermiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.username;
    const kidneyId = req.query.kidneyId;

    if(username != "Aditya" && password != "pass1234") {
        res.status(403).json({
            message: "user doesn't exist",  
        });
    }
    else {
        next(); 
    }
}

function kidneymiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.header.password;
    const kidneyId = req.query.kidneyId; 

    if(kidneyId != 1 && kidneyId != 2) {
        res.status(403).json({
            message: "Please enter valid kidney/s",
        });
    }
    else next(); 
}

app.get("/health-checkup", usermiddleware, kidneymiddleware, function(req, res) {
    res.send("Your kidney is healthy"); 
}); 

app.get('/heath-checkup', kidneymiddleware, function(req, res) {
    res.send("You have heathy kidney"); 
});

app.listen(3030); 