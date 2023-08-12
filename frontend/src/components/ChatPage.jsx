// import React, { useEffect } from 'react'
// import axios from 'axios'


// // fetching data from Backend
// const ChatPage = () =>{

//     const fetchChats = async() =>{
//         // fetching api using axios
//         // frm server path
//         axios.defaults.baseURL = 'http://localhost:500'; 

//         const data = await axios.get('/api/chat')

//         console.log(data)
//     }
// // run when the component run for the first time
//   useEffect(()=>{
//     fetchChats();
//   },[])


//   return (
//     <div>ChatPage</div>
//   )
// }

// export default ChatPage


import React, { useEffect } from 'react';

const ChatPage = () => {
  const fetchChats = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/chat', true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          console.log(data);
        } else {
          console.error('Error fetching chats:', xhr.statusText);
        }
      }
    };

    xhr.send();
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>ChatPage</div>
  );
};

export default ChatPage;
