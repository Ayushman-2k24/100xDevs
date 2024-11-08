const express = require("express")
const port=3000
const app = express()

app.use(express.json());

app.get('/',function(req,res){
    res.send("heloo world")
})

app.listen(port)
// first npm init -y , npm install express then node index.js
