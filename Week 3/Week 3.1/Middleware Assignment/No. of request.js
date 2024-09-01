const express = require('express'); 
const app = express(); 

let requestCount = 0; 

function noOfReq(req, res, next) {
    requestCount++; 
    console.log(requestCount); 
    next(); 
}

app.use(noOfReq); 

app.use('/helth-checkup', function(req, res){
    res.status(200).json({
        message: "All process clear", 
    }); 
}); 

app.listen(3030); 