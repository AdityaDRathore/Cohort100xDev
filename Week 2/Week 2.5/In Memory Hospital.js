const express = require('express'); 

var users = [{
    name: "John",
    kidney: [{
        healthy: false
    }, {
        healthy: true
    }]
}]; 


const app = express(); 
app.use(express.json()); 

app.get('/', function(req, res) {
    const JohnKidneys = users[0].kidney; 
    const numberOfKidneys = JohnKidneys.length; 
    console.log(JohnKidneys);
    let numberOfHealthyKidneys = 0; 
    for(let i = 0; i < JohnKidneys.length; i++) {
        if(JohnKidneys[i].healthy) {
            numberOfHealthyKidneys++; 
        }
    }
    console.log(numberOfHealthyKidneys);
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys; 
    res.json ({
        JohnKidneys,
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    } )
})

app.post('/', function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidney.push({
        healthy: isHealthy  
    })
    res.json({
        message: "Done!"
    })
})

app.put('/', function(req, res) {
    for(let i = 0; i < users[0].kidney.length; i++) {
        users[0].kidney[i].healthy = true; 
    }
    res.json({}); 
})

app.delete('/', function(req, res) {

})

app.listen(3030); 