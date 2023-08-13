import React, { useEffect, useState } from 'react'
import axios from 'axios'


// fetching data from Backend
const ChatPage = () =>{

  const [chats,setChats] = useState([])

    const fetchChats = async() =>{
        // fetching api using axios
        // frm server path
        axios.defaults.baseURL = 'http://localhost:501'; 

        const {data} = await axios.get('/api/chat')

        setChats(data)
    }
// run when the component run for the first time
  useEffect(()=>{
    fetchChats();
  },[])


  return (
    <div>
      {chats.map((chat)=><div key={chat._id}>{chat.chatName}</div>)}
    </div>
  )
}

export default ChatPage


