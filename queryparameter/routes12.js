const express = require('express')
const App = express();

App.get('/basha/:id', (req, res) => {
    const UserId = req.params.id;

    res.send(`Your UserId is ${UserId}`);
    res.end();
}).listen(3000, () => {
    console.log("Port 3000 run successfully");
    
})