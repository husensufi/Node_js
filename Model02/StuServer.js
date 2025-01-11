const express = require('express');
const App = express();
const db = require('../models/db');

const bodyParser = require('body-parser');
const studentModel = require('./Student');
App.use(bodyParser.json());


//const studentModel = require('./Student');

App.get('/', (req, res) => {
    res.send("Hello World Husen");
    res.end();
});

App.post('/student', async (req, res) => {

    try {
        const data = req.body;
        const newStudent = await studentModel(data);
        const saves = newStudent.save();
        console.log("Data Saved SuccessFully");
        res.status(500).json(saves);
    }
    catch (err) {
        console.log("error has occured");
        res.status(500).json(err)
    }
})

App.get("/student", async (req, res) => {
  try {
    const data = await studentModel.find();
    console.log("Data Saved SuccessFully");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

App.listen(8000, () => {
    console.log("Port 8000 Run SuccessFully");
    
})

