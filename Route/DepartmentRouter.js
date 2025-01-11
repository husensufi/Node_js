const express = require('express');

const router = express.Router();

const depModel = require('../models/Company');


router.post("/", async (req, res) => {
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
router.get("/", async (req, res) => {
  try {
    const data = await depModel.find();
    console.log("Data Fetched SuccessFully");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params; // Extract id from route parameters
    const response = await depModel.findByIdAndRemove(id); // Perform delete operation
    if (!response) {
      return res.status(404).json({ error: "Record Not Found" }); // Handle case where record doesn't exist
    }
    console.log("Data deleted successfully");
    res.status(200).json({ message: "Data Deleted Successfully" }); // Respond with success message
  } catch (err) {
    console.error("Error deleting data:", err); // Log error for debugging
    res
      .status(500)
      .json({ error: "Internal Server Error", details: err.message }); // Consistent error response
  }
});

 
module.exports = router;