const express = require("express");
const app = express();

const user= [{
    name:"John",
    kidneys:[{
        healthy:false
    }]
    
}];
app.use(express.json());


app.get("/",function(req,res){
    const johnkidneys = user[0].kidneys;
    const numberOfkidneys =johnkidneys.length;
    const numberOfHealthyKidneys = 0;
    for (let i = 0; i < johnkidneys.length; i++) {
        if (johnkidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys+1;
        }
        
    }
    const numberOfUnhealthyKidneys = numberOfkidneys -numberOfHealthyKidneys;
    res.json({
        numberOfkidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})


app.post("/",function (req,res) {
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:'done!'
    })
})

app.listen(3000);