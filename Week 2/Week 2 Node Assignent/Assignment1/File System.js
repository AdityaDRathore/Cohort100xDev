const express = require('express'); 
const fs = require('fs'); 
const path = require('path')
const app = express(); 

module.exports = app;

app.get('/files', function(req, res) {
    fs.readdir(path.join(__dirname, './files/'), function(err, files) {
        if(err) {
            return res.status(500).json({ 
                error: "Failed to retrieve files"
            }); 
        }
        return res.status(200).json(files, {
            message: "OK"
        }); 
    }); 
})

app.get('/file/:filename', function (req, res) {
    const filepath = path.join(__dirname, './files/', req.params.filename);

    fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
        return res.status(404).send('File not found');
    }
    res.send(data);
    });
});

app.listen(3030); 