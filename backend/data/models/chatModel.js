const mongoose = require('mongoose')

const chatModel = mongoose.Schema(
    {
        // define the object
        chatName:{type:String,trim:true},
        isGroupChat:{type:Boolean,default:false},
        users:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }],
        latestMessage:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message"
        },
        groupAdmin:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    },
    {
        timestamps:true
    }
)

//chatName
//isGroupChat
//users
//latestMessage
//groupAdmin - if it group chat

// data model


const Chat = mongoose.model('Chat',chatModel)

module.exports = Chat