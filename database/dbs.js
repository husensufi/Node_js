const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/husen';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology : true
})
    .then(() => {
    console.log("Connected");
    
    })
    .catch((err) => {
    console.log("Disconnected");
    
})