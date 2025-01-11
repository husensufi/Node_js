const mongoose = require('mongoose');


//Creating a Schema 
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ssn: {
    type: Number,
    required: true,
  },
  salary: {
    type: Number,
  },
  mobile: {
    type: Number,
    required: true,
    unique: true,
  },
  work: {
    type: String,
    enum: ["aaa", "bbb", "ccc","ddd","eee"],
    required: true,
  },
});

//Create a Model
const Person = mongoose.model("Person", personSchema);
module.exports = Person;    //Expoprt the module