

const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/mydb';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

db = mongoose.connection;

db.on('connected', () => {
    console.log("Connected Successfully");
    
});
db.on('disconnected', () => {
    console.log("Disconnected Successfully");
    
})
db.on('error', (err) => {
    console.log("Error", err);
    
})
//dule.exports=