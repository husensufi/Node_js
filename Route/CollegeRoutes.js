const express = require("express");
const router = express.Router();
const collegeModel = require("../Route/College");

// res.send("Hello World");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newCollege = await collegeModel(data);
    const saves = newCollege.save();
    console.log("Data Saved SuccessFully");

    res.status(200).json(saves);
  } catch (err) {
    console.log("Error", err);
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await collegeModel.find();
    console.log("data fetched successfully");
    res.status(200).json(data);
  } catch (err) {
    console.log("Error", err);
    res.status(500).json(err);
  }
});

//basha

module.exports = router;
