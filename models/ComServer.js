const express = require("express");
const App = express();
const db = require("./Model01/db");

const bodyParser = require("body-parser");
App.use(bodyParser.json());

//use the model
const depModel = require("./Company");

App.get("/", (req, res) => {
  res.send("Hello World");
  res.end();
});

//post route to add a person
App.post("/depart", async (req, res) => {
  try {
    const data = req.body; //It contains the person data

    const newDepartment = new depModel(data); //create a newPerson document in Mongoose Model

    //Save the newPerson data
    const response = await newDepartment.save();
    console.log("Data Saved SuccessFully");

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
App.get("/depart", async (req, res) => {
  try {
    const data = await depModel.find();
    console.log("Data Saved SuccessFully");
    res.status(200).json(data);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

App.listen(3000, () => {
  console.log("Success");
});
