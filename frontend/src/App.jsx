
import { Route } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Homepage'
import ChatPage from './Pages/ChatPage'


function App() {
  

  return (
    <>
    <div className="App">
    {/* exact ignores exact path to avoid render in same page */}
    

     <Route path='/' component ={Homepage} exact/>
      <Route path='/chats' component ={ChatPage}/>
     
      </div>
    </>
  )
}

export default App
