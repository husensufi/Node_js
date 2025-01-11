const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    P_id: {
        type: Number,
        unique: true
    },
    P_Name: String,
    P_price: Number,
    P_Year: Number
});

const productModel = new mongoose.model("productModel", productSchema);
module.exports = productModel;

