const express = require("express")
const app = express()

let user=[{
    name:"ayushman",
    kidneys:[{
        healthy:true
    },]
}]
app.use(express.json())
app.get('/',function (req,res) {
    const ayushmanKidneys = user[0].kidneys
    const noOfKidneys = ayushmanKidneys.length

    let noOfHealthyKidneys = ayushmanKidneys.filter(kidney=>kidney.healthy)
    let noHkidneys = noOfHealthyKidneys.length

    let noOfUNHealthyKidneys = ayushmanKidneys.filter(kidney=> !kidney.healthy)
    let noUhkidneys = noOfUNHealthyKidneys.length

    res.json({
        noOfKidneys,
        noHkidneys,
        noUhkidneys
    })
})

app.post('/',function(req,res){
    const isHealthy = req.body.isHealthy
    user[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"done"
    })
})


app.put('/',function(req,res){
    if (areEveryKIdneyHealthy()) {
        res.status(411).json({
            msg:"every kidney is healthy"
        })
    }else{
        for (let i = 0; i < user[0].kidneys.length; i++) {
            user[0].kidneys[i].healthy=true;
        }
        res.json({})
    }
    
})

// delete all the unhealthy kidneys
app.delete('/',function(req,res){
    if (isAtleastOneUnHealthyKidneys()) {
        let newKidneys=[]
        for (let i = 0; i < user[0].kidneys.length; i++) {
            if (user[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy:true
                })
            }
        }
        user[0].kidneys=newKidneys
        res.json({msg:"done"})
    }else{
        res.status(411).json({
            msg:"you have no bad kidneys"
        })
    }
    
})

function isAtleastOneUnHealthyKidneys() {
    let isAtleastOneUnHealthyKidneys =false
    for(let i=0;i<user[0].kidneys.length;i++){
        if(!user[0].kidneys[i].healthy){
            isAtleastOneUnHealthyKidneys =true 
        }
    }
    return isAtleastOneUnHealthyKidneys
}

function areEveryKIdneyHealthy() {
    let areEveryKIdneyHealthy =false
    for(let i=0;i<user[0].kidneys.length;i++){
        if(user[0].kidneys[i].healthy){
            areEveryKIdneyHealthy =true 
        }
    }
    return areEveryKIdneyHealthy
}
console.log(areEveryKIdneyHealthy());

app.listen(3001, () => console.log("Server running on port 3001"));
