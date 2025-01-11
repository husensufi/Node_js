const express = require('express');
const app = express();

app.get('/users', (req, res) => {
    const Name = req.query.Name;
    const USN = req.query.USN;

    res.send(`Your Name is ${Name} and Your USN is ${USN}`)
})
app.listen(3000, () => {
    console.log("Port run successfully");
    
});