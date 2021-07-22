const { response } = require('express');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

server.use(bodyParser.urlencode());
server.use(bodyParser.json());

app.get('/jsonapi',(req, res) => {
    
    let personName = request.body.name;
    response.json({name:personName})
    
    
    });


app.post('/jsonapi',(req, res) => {
    
if(!req.body.name){
res.status(400).send('name is required');
return;
}

let personName = request.body.name;
response.json({name:personName})

res.send(personName);

});







port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));