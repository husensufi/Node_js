const mongoose = require('mongoose');

//define a url
const mongoURL = "mongodb://localhost:27017/mydatabase";
//const mongoURL = 'mongodb+srv://husensufi:<Mahisha>@cluster0.yt2wg.mongodb.net/'


//connect a database
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology:true
});

//default connection
const db = mongoose.connection;

//perfroming events
db.on('connected', () => {
    console.log('Connected Successfully');
    
});

db.on('error', (err) => {
    console.log('Error', err);
    
});

db.on('disconnected', () => {
    console.log('Disconnected SuccessFully');
    
});
module.exports = db;