const express = require('express');
const App = express();
const db = require('../database/db')

App.get('/', (req, res) => {
    const Employee = [
        {
            name: "Husen",
            id: 125,
            place: "raichur",
        },
        {
            name: "Basha",
            id: 125,
            place: "Mudgal",
        },
        {
            name: "Husen",
            id: 125,
            place: "raichur",
        },
    ];
    res.status(201).send(Employee);
    res.end();
});

App.listen(3000, () => {
    console.log("Port 3000 run successfully");
});