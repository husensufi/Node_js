const express = require("express");

const router = express.Router();

//const studentModel = require("../models/products");
const productModel = require("../models/products");

router.post("/", async (req, res) => {
  try {
    const data = req.body; //It contains the person data

    const newProduct = new productModel(data); //create a newPerson document in Mongoose Model

    //Save the newPerson data
    const response = await newProduct.save();
    console.log("Data Saved SuccessFully");

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await productModel.find();
    console.log("Data Saved SuccessFully");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
