const express = require('express');
const App = express();
//const Port = 3000;

App.get('/husen', (req, res) => {
    const Husen = {
        name: "Husen Basha",
        usn: 1234,
        place: "mudgal",
    }

    res.send(Husen);
    res.end();

});

App.get("/madan", (req, res) => {
  const Husen = {
    name: "Madan",
    usn: 1234,
    place: "mudgal",
  };

  res.send(Husen);
  res.end();
});

App.get("/abdul", (req, res) => {
  const Husen = {
    name: "Abdul",
    usn: 1234,
    place: "mudgal",
  };

  res.send(Husen);
  res.end();
});

App.get("/rasool", (req, res) => {
  const Husen = {
    name: "Rasool",
    usn: 1234,
    place: "mudgal",
  };

  res.send(Husen);
  res.end();
});

App.get("/", (req, res) => {
  const Husen = {
    name: "Home ",
    usn: 1234,
    place: "mudgal",
    };
    

  res.status(202).send(Husen);
  res.end();
});



App.listen(3200, () => {
    console.log('Port 3000 run successfully');
    
})