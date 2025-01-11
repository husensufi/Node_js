const express = require('express');
const App = express();

App.get('/basha', (req, res) => {
    const Name = req.query.Name;
    const USN = req.query.USN;
    const Address = req.query.Address;

    res.send(`Your Name is ${Name}, USN is ${USN} and Your Address is ${Address}`);
    res.end();
}).listen(2020, () => {
    console.log("Success");
    
});


//Query parameter