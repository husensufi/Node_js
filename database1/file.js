const express = require('express');
const App = express();
const data1 = "./data1.js"

App.get('/', (req, res) => {
    res.send("Home Page ");
    res.end();
});
App.get("/about", (req, res) => {
  res.send("About Page ");
  res.end();
});
App.get("/menu", (req, res) => {
  res.send("Menu Page ");
  res.end();
});

App.listen(3000, () => {
    console.log("3000 Port Run SuccessFully");
    
})