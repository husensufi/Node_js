const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/husen";

mongoose.connect(url, {
    
    useNewUrlParser :true,
    useUnifiedTopology : true
})
    .then(() => {
    console.log("Login SuccessFully");
    
    })
    .catch((err) => {
    console.log("Disconnected",err);
    
})