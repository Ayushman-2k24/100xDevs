const express = require("express")
const app = express()

const user=[{
    name:"ayushman",
    kidneys:[{
        healthy:false
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
    for (let i = 0; i < user[0].kidneys.length; i++) {
        user[0].kidneys[i].healthy=true;
    }
    res.json({})
})

app.delete('/',function(req,res){
    let newKidneys=[]
    for (let i = 0; i < user[0].kidneys.length; i++) {
        if (user[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy:true
            })
        }
    }
    user[0].kidneys=newKidneys
    res.json({})
})


app.listen(3001, () => console.log("Server running on port 3001"));
