const express = require('express');
const App = express();

App.get('/Day1/Problem1switch.js/:id', (req, res) => {
    const arr = req.params.id;
    res.status(400).send(arr);
    res.end();

})

App.listen(3020, () => {
    console.log('Success');
    
})