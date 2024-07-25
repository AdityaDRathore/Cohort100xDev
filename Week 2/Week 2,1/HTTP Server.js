import express from 'express'; 
const express = require('express'); 
const port = 5000;
const app = express();

app.get('/', function(req, res) {
    res.json({
        name: "Aditya",
        age: 20
    })
})

app.listen(port);