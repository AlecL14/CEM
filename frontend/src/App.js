import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login';
import UserHome from './User/UserHome.js';
import AdminHome from './Admin/AdminHome.js'; 

import './App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/userHomePage" element={<UserHome />} />
          <Route path="/adminHomePage" element={<AdminHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;