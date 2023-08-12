const express = require("express")

const app = express()

// request = req response = res
app.get('/',(req,res)=>{
    res.send('API is Running') 

})

app.listen(5000, console.log('Server Started on Port 5000'))