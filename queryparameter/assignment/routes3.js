/*Create an Express app that listens on the route /products/:id. 
The route should access the id parameter and return a message like:*/

const express = require('express');
const App = express();

App.get('/products/:id', (req, res) => {
    const prodid = req.params.id;
    //res.send(`Product Id ${prodid}`);
    if (prodid === '101') {
        res.send("Laptop");
        
    }
    else if (prodid === "102") {
      res.useChunkedEncodingByDefault("Moble");
    } else {
      res.send("InValid");
    }
}).listen(5000, () => {
    console.log("Success");
    
});


//enter path localhost:3000/products/101

//output : Product ID: 101

