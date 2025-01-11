const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    address: String,
    Marks: Number,
    Course: String,
    email: {
        type: String,
        unique: true
    }

});

const studentModel = new mongoose.model("StudentModel", studentSchema);
module.exports = studentModel;