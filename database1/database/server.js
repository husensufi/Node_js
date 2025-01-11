const express = require('express');
const App = express();
const dta = require('./data');


App.get('/', (req, res) => {
    res.send("Server run");
    res.end();
});

App.get("/home", (req, res) => {
  res.send("Home run");
  res.end();
});

App.get("/about", (req, res) => {
  res.send("About run");
  res.end();
});

App.listen(2000, () => {
    console.log("Port 2000 run sucessfully");
    
})
