const express = require('express');
const App = express();

App.get('/husen/:name', (req, res) => {
    const Name = req.params.name;
    res.send(`Your Name is ${Name}`);
    res.end();
    
});

App.get("/users/:password", (req, res) => {
  const Pass = req.params.password;
  res.send(`Your Password is ${Pass}`);
  res.end();
});

App.get("/users/:name/password/:pass", (req, res) => {
    const Name = req.params.name;
    const Pass = req.params.pass;
  res.send(`Your name is ${Name} and Your Passwors is ${Pass}`);
  res.end();
});

    App.listen(3000, () => {
    console.log("Port 3000 run successfully");
    
})