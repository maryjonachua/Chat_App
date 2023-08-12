const express = require("express")
const dotenv = require("dotenv")
const chats = require("./data/data")

const app = express()

dotenv.config()

// request = req response = res
app.get('/',(req,res)=>{
    res.send('API is Running') 

})

app.get('/api/chat',(req,res)=>{
    res.send(chats) 

})

app.get('/api/chat/:id',(req,res)=>{
    // getting the param id from the request id
    //console.log(req.params.id)

    // find in data array all single data
    const singleChat = chats.find(c=>c._id === req.params.id)

    // send to user by response - res
    res.send(singleChat)

})

// env
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server Started on Port ${PORT}`))