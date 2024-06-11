const express = require("express")
const app = express()
const port = 3000

function calculateSum(counter){
    sum = 0;
    for(var i = 0 ; i <= counter ; i++){
        sum += i;
    }
    return sum
}

app.get("/",(req,res)=>{
    res.send("Hello world !")
})

app.get("/calculateSum",(req,res)=>{
    var counter = req.query.counter;
    var calculatedSum = calculateSum(counter )
    console.log(calculatedSum)
    res.send("Hello world , Sum is "+ calculatedSum)
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})


var calculatedSum = calculateSum(100)
console.log(calculatedSum)