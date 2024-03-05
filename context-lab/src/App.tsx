import { useState } from 'react'
import './App.css'
import UserContext from './UserContext'
import UserInterface from './interfaces/UserInterface'
import Header from './components/Header'
import Home from './components/Home'


function App() {

  const [user, setUser] = useState<UserInterface>({
    username: '',
    password: '',
    lastLogIn: 0
  })

  return (
    <div>
      <UserContext.Provider value={{ user , setUser }}>
        <Header/>
        <Home/>
      </UserContext.Provider>
    </div>
  )
}

export default App
