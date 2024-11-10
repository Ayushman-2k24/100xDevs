const express=require("express")
const app = express()

app.get('/',function (req,res) {
    const a=Number(req.query.a)
    const b=Number(req.query.b)
    let sum=a+b
    res.send("the sum is "+sum)
})
app.listen(3000)