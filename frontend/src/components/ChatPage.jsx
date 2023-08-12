import React, { useEffect } from 'react'
import axios from 'axios'


// fetching data from Backend
const ChatPage = () =>{

    const fetchChats = async() =>{
        // fetching api using axios
        // frm server path
        axios.defaults.baseURL = 'http://localhost:5000'; 

        const data = await axios.get('/api/chat')

        console.log(data)
    }
// run when the component run for the first time
  useEffect(()=>{
    fetchChats();
  },[])


  return (
    <div>ChatPage</div>
  )
}

export default ChatPage


