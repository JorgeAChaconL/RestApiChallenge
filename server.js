const express = require ("express");
const bodyParser = require("body-parser");

const app = express();
const port = 4200;

app.use(bodyParser.json());


app.get('/hello', function(req,res){
    res.send('Hello there');
    res.send('I hope this is right, made by: JOrge Chacon');
});

app.post("/add", (req, res) => {
    const { a, b } = req.body;
    res.send(`The sum is: ${a+b}`);
});

app.put('/subs',function(req,res){
    const { a, b } = req.body;
    res.send(`The subs is: ${a-b}`);
});

app.post('/multi',function(req,res){
    const { a, b } = req.body;
    res.send(`The multiplication result is : ${a*b}`);
})

app.get('/html', function(req,res){
    res.send('<html> <div style="color:black;background-color:red"> This is my div</div></html>')
})


app.listen(port, function(){
    console.log(`API listening at the port ${port}`);
    
})