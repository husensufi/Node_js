/*Write an Express route /users/:userId/orders/:orderId that accepts two parameters:

userId: Represents a specific user.
orderId: Represents a specific order from the user.

Task: The route should return a message like:

sql
Copy code
User ID: 123, Order ID: 456..*/

const express = require('express');
const App = express();

App.get('/userid/:user/orderid/:order', (req, res) => {
    const uid = req.params.user;
    const oid = req.params.order;

    res.send(`User id ${uid} and Order id ${oid}`);
    res.end();
}).listen(3000, () => {
    console.log('Success');
    
})