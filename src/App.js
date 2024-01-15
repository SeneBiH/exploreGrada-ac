import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './routes/Home';
import About from './routes/About';
import Locations from './routes/Locations';
import Contact from './routes/Contact';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/locations' element={<Locations/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
      
      
    </div>
  );
}

export default App;
