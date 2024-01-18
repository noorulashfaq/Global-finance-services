// App.js
import React from 'react';
import Landing from './components/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import About from './components/About';
import Finance from './components/Finance';
import Footbar from './components/Footbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
      <About/>
      <Finance/>
      <Footbar/>
    </div>
  );
}

export default App;

