const express = require('express'); 
const app = express(); 

app.use(express.json()); 

app.post('/health-checkup', function(req, res) {
    const kidneys = req.body.kidneys; 
    res.send("You have "+ kidneys.length + " kidneys");
});

//Global catch
app.use(function(err, req, res, next){
    err.send("You got error")
    res.json({
        message: "Something is wrong with our server"
    })
})

app.listen(3030); 