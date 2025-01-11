const mongoose = require('mongoose');

const Department = new mongoose.Schema({
    name: {
        type: String,
        enum: ["sales", "civil", "Computer", "mechanical"],
        required:true
        
    },
    id: {
        type: Number,
        unique:true
    },
    location: String,
    No_of_Emp: Number
    
});

const depModel = mongoose.model("depModel", Department);
module.exports = depModel;