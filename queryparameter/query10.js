const express = require('express');
const App = express();

App.get('/users', (req, res) => {
    const Name = req.query.Name;
    const USN = req.query.USN;

    res.send(`Your Name is ${Name} and Your USN is ${USN}`);
    res.end();
})

App.get("/husen", (req, res) => {
  const Course = req.query.Course;
  const College = req.query.College;

  res.send(`Your Course is ${Course} and Your College is ${College}`);
  res.end();
});

App.get("/basha", (req, res) => {
  const Dist = req.query.Dist;
  const Town = req.query.Town;

  res.send(`Your Dist is ${Dist} and Your Town is ${Town}`);
  res.end();
});

App.listen(5000, () => {
    console.log("Port 5000 run succesfully");
    
})