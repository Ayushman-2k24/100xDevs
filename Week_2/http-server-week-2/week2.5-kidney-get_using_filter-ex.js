const express = require("express")
const app = express()

const user=[{
    name:"ayushman",
    kidneys:[{
        healthy:false
    },{
        healthy:true
    }]
}]

app.get('/',function (req,res) {
    const ayushmanKidneys = user[0].kidneys
    const noOfKidneys = ayushmanKidneys.length

    let noOfHealthyKidneys = ayushmanKidneys.filter(kidney=>kidney.healthy)
    const nohkidneys = noOfHealthyKidneys.length

    let noOfUNHealthyKidneys = ayushmanKidneys.filter(kidney=> !kidney.healthy)
    const nonhkidneys = noOfUNHealthyKidneys.length

    res.json({
        noOfKidneys,
        nohkidneys,
        nonhkidneys
    })
})

app.listen(3001, () => console.log("Server running on port 3000"));
