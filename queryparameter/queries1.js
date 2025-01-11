const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  // Access query parameters using req.query
  const name = req.query.name;
  const age = req.query.age;

  res.send(`Query Parameters: Name = ${name}, Age = ${age}`);
});
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});



//localhost:3000/users?name=Husen&age=22