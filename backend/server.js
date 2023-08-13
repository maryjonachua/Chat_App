const express = require("express")
const dotenv = require("dotenv")
//const cors = require('cors')
const chats = require("./data/data")
const connectDB = require("./config/db")
const colors = require('colors')
const userRoutes = require('./routes/userRoutes')




dotenv.config()
connectDB()


const app = express()

app.use(express.json()) // to accept JSON data



// request = req response = res
app.get('/',(req,res)=>{
    res.send('API is Running') 

})

app.use('/api/user',userRoutes)

// app.get('/api/chat',(req,res)=>{
//     res.send(chats) 

// })




//original code
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


// cors
app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`.yellow.bold))

  