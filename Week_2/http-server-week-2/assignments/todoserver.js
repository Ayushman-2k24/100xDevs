const express=require("express")
const path=require("path")
const app=express()
app.use(express.json())


let todos=[{
    "id":1,
    "title":" dsa",
    "completion":false,
    "description":"i should do dsa"
},{
    "id":2,
    "title":" web dev",
    "completion":true,
    "description":"dev is fun"
},{
    "id":3,
    "title":"gym",
    "completion":true,
    "description":"health is wealth"
}]

app.get('/todos',function(req,res){
    var printtodos=[]
    for(var i=0;i<todos.length;i++){
        printtodos.push(todos[i].title)
    }
    res.status(200).json({
        printtodos
    })
})
app.get('/todos/:id',function(req,res){
    var id=req.params.id
    if(isidpresent(id)){
        var todoitem=[]
        for(var i=0;i<todos.length;i++){
        if(todos[i].id==id){
            todoitem.push(todos[i].title)
        }
    }
        res.status(200).json({
        todoitem
        })
    }else{
        res.status(404).json({
            msg:"not found the id "
        })
    }
    
})
app.post('/todos',function(req,res){
    var todo=req.body
    todos.push(todo)
    console.log(todo);
    res.status(201).json({
        todo
    })
})
app.put('/todos/:id',function(req,res){
    var id=req.params.id
    for(var i=0;i<todos.length;i++){
        if(todos[i].id==id){
            todos[i].completion="true"
        }
    }
    res.json({
        msg:"done"
    })
})

app.delete('/todos/:id',function(req,res){
    var id = req.params.id
    for(var i=0;i<todos.length;i++){
        if(todos[i].id==id){
            todos.splice(i,1)
        }
    }
    res.json({
        msg:"deleted"
    })
})

function isidpresent(id){
    var idpresent = false
    for(var i =0;i<todos.length;i++){
        if(todos[i].id==id){
            idpresent=true
        }
    }
    return idpresent
}
app.listen(3000)
