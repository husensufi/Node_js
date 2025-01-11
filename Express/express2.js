const express = require('express');
const App = express();

App.get('/', (req, res) => {
    res.send("It is a Home Page");
    res.end();
    
});

App.get("/about", (req, res) => {
  res.send("It is a About Page");
  res.end();
});

App.get("/obj", (req, res) => {
    const Employee = `{
        Name: "aaa",
        usn: 1254,
        place:'Mangalore',
    }`;
    
    
  res.send(Employee);
  res.end();
});
App.listen(3000, () => {
    console.log("port 3000 run successfully");
    
})
