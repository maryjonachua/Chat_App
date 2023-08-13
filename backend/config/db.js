const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async() =>{
    try{
        // responsible to connect on db
        const conn = await mongoose.connect(process.env.Mongo_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)

    }catch(error){
        console.log(`Error: ${error.message}`.red.bold)
        process.exit()

    }
}

module.exports = connectDB
