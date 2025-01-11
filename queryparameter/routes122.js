const express = require('express');
const App = express();

App.get('/husen/:id', (req, res) => {
    
    const USN = req.params.id;
    res.send(`Your USN is ${USN}`);
    res.end();
}).listen(3000, () => {
    console.log("port 3000 run successfully");
    
})