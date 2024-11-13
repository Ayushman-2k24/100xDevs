const { error } = require("console");
const express = require("express");
const fs = require("fs");
const path = require("path")
const app = express();

app.get('/files',function (req,res) {

    const dirpath =path.join(__dirname,"files")
    
    fs.readdir(dirpath,(err,files)=>{
        if (err) {
            return res.status(500).json({error:"unalbe to find dir"})
        } else {
            res.json({files})
        }
    })
})
app.get('/files/:filename',function (req,res) {

    const name= req.params.filename
    const filepath=path.join(__dirname,"files",name)
    fs.readFile(filepath,"utf-8",function (err,data) {
        if (err) {
            return res.status(404).json({error:"file cant be found"})
        } else {
            res.json({
                data
            })
        }
        
    })
})
app.listen(3000)