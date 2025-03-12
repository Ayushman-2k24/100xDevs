const express=require("express")
const fs=require("fs")
const path=require("path")
const { json } = require("stream/consumers")
// const { stringify } = require("querystring")
const app=express()
app.use(express.json())

var filepath=path.join(__dirname,"files","data.json")
app.get("/todos",function(req,res){
    fs.readFile(filepath,"utf-8",function(err,data){
        if(err){
            res.status(500).json({msg:"error reading file"})
        }
        const todos=JSON.parse(data)
        res.status(200).json(todos)
    })
})

app.get('/todos/:id',function(req,res){
    
    fs.readFile(filepath,"utf-8",function(err,data){
        if(err){
            res.status(500).json({
                msg:"error reading file"
            })
        }
    
        var id=parseInt(req.params.id)
        var todos=JSON.parse(data)
        var todo=todos.find(item=>item.id==id)

        if(!todo){
            res.status(404).json({msg:"todo not found"})
        }

        res.status(200).json(todo)
    })
})

app.post('/todos',function(req,res){

    fs.readFile(filepath,"utf-8",function(err,data){

        if(err){res.status(500).json({msg:"error reading file"})}
        
        let todos=JSON.parse(data)

        if(!req.body.title || typeof req.body.completion !=="boolean"){
            return res.status(400).json({msg:"title and completion are required"})
        }

        let newId=todos.length>0? todos[todos.length-1].id+1:1

        let newtodo={
            id:newId,
            title:req.body.title,
            completion:req.body.completion,
            description:req.body.description || ""
        }

        todos.push(newtodo)

        fs.writeFile(filepath,JSON.stringify(todos),function(err){
            if(err){
                return res.status(500).json({msg:"error writing file"})
            }else{
                res.status(201).json({msg:"todo created successfully",newtodo})
            }
        })
    })
})

app.put('/todos/:id',function(req,res){
    fs.readFile(filepath,"utf-8",function(err,data){

        
    if(err){return res.status(500).json({msg:"error reading file"})}
    
    let todos=JSON.parse(data)
        let id=parseInt(req.params.id)
        let index=todos.findIndex(item=>item.id==id)
        
        
        if(index==-1){
            return res.status(404).json({msg:"todo not found"})
        }
 
        if(!req.body.title && req.body.completion == undefined && !req.body.description){
            return res.status(400).json({msg:"provide atlest one field for update"})
        }

        todos[index]={
            ...todos[index],
            title:req.body.title??todos[index].title,
            completion:req.body.completion??todos[index].completion,
            description:req.body.description??todos[index].description
        }
        
        fs.writeFile(filepath,JSON.stringify(todos),function(err){
            if(err){
                return res.status(500).json({msg:"error updating the file"})
            }
            else{
                res.status(200).json({msg:"updated the todos successfully"})
            }
        })

    })
})

app.delete("/todos/:id",function(req,res){
    fs.readFile(filepath,"utf-8",function(err,data){
        if(err){
            return res.status(500).json({msg:"error reading file"})
        }

        let todos=JSON.parse(data)
        const id=parseInt(req.params.id)
        const updatedtodos=todos.filter(item=>item.id!==id)

        if(todos.length==updatedtodos.length){
            return res.status(404).json({msg:"todo not found"})
        }

        fs.writeFile(filepath,JSON.stringify(updatedtodos),function(err){
            if(err){
                return res.status(500).json({msg:"error reading file"})
            }
            res.status(200).json({msg:"todo deleted successfully"})
        })
    })
})

app.listen(3000)