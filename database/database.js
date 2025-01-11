const express = require('express');
const App = express();
const db = require('./db')

App.get('/', (req, res) => {
    res.send('Hello World hghyrhr   bvhghfn,kl;fnm');
    res.end()
}).listen(3000, () => {
    console.log("3000 run successfully");
    
});
