const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    brance: {
        type: String,
        enum: ["MCA", "MBA", "M.Com", "M.Tech", "M.Arch"],
        require: true
        
    },
    Address: String,
    pincode: Number,
    Dist: String
});

const collegeModel = new mongoose.model("collegeModel", collegeSchema);
module.exports = collegeModel;

