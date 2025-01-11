const express = require('express');

const router = express.Router();
//const Person = require("./Employee");
const Person = require("../models/Employee");


//post route to add a person
router.post("/", async (req, res) => {
  try {
    const data = req.body; //It contains the person data

    const newPerson = new Person(data); //create a newPerson document in Mongoose Model

    //Save the newPerson data
    const response = await newPerson.save();
    console.log("Data Saved SuccessFully");

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data Saved SuccessFully");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType; // Get workType from route parameters
    const validWorkTypes = ["aaa", "bbb", "ccc", "ddd", "eee"]; // Define valid work types

    if (validWorkTypes.includes(workType)) {
      const response = await Person.find(); // Fetch data from the database
      console.log("Data to be responded");
      res.status(200).json(response); // Respond with fetched data
    } else {
      res.status(400).json({ error: "Invalid work type" }); // Handle invalid workType
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    res
      .status(500)
      .json({ error: "Internal server error", details: err.message });
  }
});

module.exports = router;


