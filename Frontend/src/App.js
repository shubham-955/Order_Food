import './App.css';
import React from 'react';
import { Home } from './Pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { Hotel } from './Pages/Hotel/Hotel';
import { Cart } from './Pages/Cart/Cart';
import { Thanks } from './Pages/Thanks/Thanks';


function App() {

  return (
    <div className="Container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/thanks' element={<Thanks />} />
        <Route path=':id' element={<Hotel />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
