
import { Route } from 'react-router-dom'
import './App.css'
import Homepage from './components/Homepage'
import ChatPage from './components/ChatPage'


function App() {
  

  return (
    <>
    {/* exact ignores exact path to avoid render in same page */}
      <Route path='/' component ={Homepage} exact/>
      <Route path='/chats' component ={ChatPage}/>
    </>
  )
}

export default App
