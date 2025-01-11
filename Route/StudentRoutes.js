const express = require("express");

const router = express.Router();

const studentModel = require("../Model02/Student");

router.post("/", async (req, res) => {
  try {
    const data = req.body; //It contains the person data

    const newStudent = new studentModel(data); //create a newPerson document in Mongoose Model

    //Save the newPerson data
    const response = await newStudent.save();
    console.log("Data Saved SuccessFully");

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await studentModel.find();
    console.log("Data Saved SuccessFully");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
