const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const chats = require("./data/data")

const app = express()

dotenv.config()

app.use(cors());

// Middleware to check Accept header for JSON
const ensureJsonContentType = (req, res, next) => {
    const acceptHeader = req.get('Accept');
    
    // If the Accept header indicates XML or other formats, handle the request
    if (acceptHeader && acceptHeader !== 'application/json') {
      return res.status(406).json({ error: 'Unsupported content type requested' });
    }
    
    next(); // Proceed to the next middleware
  };
  


// request = req response = res
app.get('/',(req,res)=>{
    res.send('API is Running') 

})


//original code
// app.get('/api/chat',(req,res)=>{
//     res.send(chats) 

// })


// frm chat gpt
app.get('/api/chat',(req,res)=>{
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(chats) 
    
})

//original code
// app.get('/api/chat/:id',(req,res)=>{
//     // getting the param id from the request id
//     //console.log(req.params.id)

//     // find in data array all single data
//     const singleChat = chats.find(c=>c._id === req.params.id)

//     // send to user by response - res
//     res.send(singleChat)

// })


// frm chat gpt
app.get('/api/chat/:id',(req,res)=>{
    const singleChat = chats.find(c=>c._id === req.params.id)

    if (!singleChat) {
        return res.status(404).json({ error: 'Chat not found' });
      }

      res.status(200).json(singleChat)

})



// env
const PORT = process.env.PORT || 5000


// cors
app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`))

const corsOptions = {
    origin: 'http://localhost:5000', // Replace with your React app's URL
  };
  
  app.use(cors(corsOptions));
  