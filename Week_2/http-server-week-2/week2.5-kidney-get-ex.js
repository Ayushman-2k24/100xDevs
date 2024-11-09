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
    let noOfHealthyKidneys= 0
    for (let i = 0; i < ayushmanKidneys.length; i++) {
        if (ayushmanKidneys[i].healthy) {
            noOfHealthyKidneys=noOfHealthyKidneys+1
        }
    }
    const noOfUNHealthyKidneys = noOfKidneys- noOfHealthyKidneys
    res.json({
        noOfKidneys,
        noOfHealthyKidneys,
        noOfUNHealthyKidneys
    })
})

app.listen(3000)
