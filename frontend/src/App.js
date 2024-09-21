import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login';
import UserMain from './userMain';
import AdminMain from './adminMain'; 

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/userHomePage" element={<UserMain />} />
          <Route path="/adminHomePage" element={<AdminMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;