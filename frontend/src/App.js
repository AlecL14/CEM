import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './login'
import './App.css'
import { useEffect, useState } from 'react'

import UserHome from './User/UserHome.js';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<UserHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App