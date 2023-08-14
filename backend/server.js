const express = require("express")
const dotenv = require("dotenv")
const cors = require('cors')
const chats = require("./data/data")
const connectDB = require("./config/db")
const colors = require('colors')
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const messageRoutes = require('./routes/messageRoutes')
const { notFound, errorHandler } = require("./middleware/errorMiddleware")




dotenv.config()

connectDB()



const app = express()

app.use(cors())

app.use(express.json()) // to accept JSON data



// request = req response = res
app.get('/',(req,res)=>{ 
    res.send('API is Running') 

})

app.use('/api/user',userRoutes)
app.use('/api/chat',chatRoutes)
app.use('/api/message',messageRoutes)

// error handling middleware
app.use(notFound)
app.use(errorHandler)



// env
const PORT = process.env.PORT || 5000


app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`.yellow.bold))

  