const express = require("express");
const App = express();
const db = require("./db");

const bodyParser = require("body-parser");
App.use(bodyParser.json());


//use the model
App.get("/", (req, res) => {
  res.send("Hello World");
  res.end();
});

// Import the Router Files
const employeeRoutes = require("../Route/EmployeeRoutes");
const studentRoutes = require('../Route/StudentRoutes');
const departmentRoutes = require('../Route/DepartmentRouter')
const productRoutes = require('../Route/ProductRoutes');
const collegeRoutes = require('../Route/CollegeRoutes');


// Use the routers
App.use("/person", employeeRoutes);
App.use("/student", studentRoutes);
App.use("/depart", departmentRoutes);
App.use("/product", productRoutes);
App.use('/college', collegeRoutes);


App.listen(3000, () => {
  console.log("Success");
});


