const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World Im ddwkjn fsvnvnn ,n ");
    res.end();
})

app.get('/husen', (req, res) => {
    res.send("Hello Husen");
    res.end();
})

app.get("/basha", (req, res) => {
  res.send("Hello Basha");
  res.end();
});

app.get("/abbu", (req, res) => {

    var husen = {
        "name": "aaa",
        "place": "Mangalore",
        "college": "SJEC"
    }
    
    
    res.send(husen);
    res.send("Hello Abbu");
  res.end();
});

app.post('/sum', (req, res) => {
    res.send('ddddddd');
    
    
})


app.listen(3000,()=> {
    console.log('Server is running on port 3000');
    
});