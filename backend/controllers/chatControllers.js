const asyncHandler = require("express-async-handler");
const Chat = require(
    '../models/chatModel'
);
const User = require("../models/userModel");


const accessChat = asyncHandler(async(req,res)=>{
    
    // fetching 1 on 1 chat
    // taking the user id to create a chat
    // send us the user id

    const {userId} = req.body

    if(!userId){
        console.log('UseId param not send with request')
        return res.sendStatus(400)
    }

    var isChat = await Chat.find({
        isGroupChat:false,
        $and:[
            {users:{$elemMatch:{$eq:req.user._id}}},
            {users:{$elemMatch:{$eq:userId}}}
        ]
    }).populate('users','-password').populate('latestMessage')

    isChat = await User.populate(isChat,{
        path:'latestMessage.sender',
        select: 'name pic email'
    })

    if(isChat.length > 0){
        res.send(isChat[0])
    }else{
        var chatData = {
            chatName:'sender',
            isGroupChat: false,
            users: [req.user._id, userId]
        }
        try {
            // create new chat
            const createdChat = await Chat.create(chatData)

            // send to user
            const FullChat = await Chat.findOne({_id:createdChat._id}).populate('users','-password')

            res.status(200).send(FullChat)
        } catch (error) {
            res.status(400)
            throw new Error(error.message)
        }
    }

})

module.exports = {accessChat}