const express=require("express")
const fs=require("fs")
const path=require("path")
// const { stringify } = require("querystring")
const app=express()
app.use(express.json())

var filepath=path.join(__dirname,"files","data.json")
app.get("/todos",function(req,res){
    fs.readFile(filepath,"utf-8",function(err,data){
        if(err){
            res.status(404).json({
                msg:"no data found"
            })
        }
        res.status(200).json(
            JSON.parse(data)
        )
    })
})

app.get('/todos/:id',function(req,res){
    
    fs.readFile(filepath,"utf-8",function(err,data){
        if(err){
            res.json({
                msg:"data not found"
            })
        }
    
        var id=parseInt(req.params.id)
        var todos=JSON.parse(data)
        var todo=todos.find(item=>item.id==id)
        if(!todo){
            res.status(404).json({msg:"todo not found"})
        }
        res.json(todo)
    })
})

app.post('/todos',function(req,res){

    fs.readFile(filepath,"utf-8",function(err,data){

        if(err){res.json({msg:"error reading file"})}
        
        let todos=JSON.parse(data)
        let newId=todos.length>0? todos[todos.length-1].id+1:1

        let newtodo={
            id:newId,
            title:req.body.title,
            completion:req.body.completion,
            description:req.body.description
        }

        todos.push(newtodo)

        fs.writeFile(filepath,JSON.stringify(todos),function(err){
            if(err){
                res.json({msg:"error writing file"})
            }else{
                res.json(newtodo)
            }
        })
    })
})

app.put('/todos/:id',function(req,res){
    fs.readFile(filepath,"utf-8",function(err,data){
        if(err){return res.json({msg:"error reading file"})}
        let todos=JSON.parse(data)
        let id=parseInt(req.params.id)
        let index=todos.findIndex(item=>item.id==id)
        
        
        if(index==-1){
            return res.json({msg:"todo not found"})
        }
 
        todos[index]={
            ...todos[index],
            title:req.body.title??todos[index].title,
            completion:req.body.completion??todos[index].completion,
            description:req.body.description??todos[index].description
        }
        
        fs.writeFile(filepath,JSON.stringify(todos),function(err){
            if(err){
                return res.json({msg:"error updating the file"})
            }
            else{
                res.json({msg:"updated the todos successfully"})
            }
        })

    })
})

app.listen(3000)