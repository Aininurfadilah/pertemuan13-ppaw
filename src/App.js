import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListProducts from './ListProducts';
import './stylesheet.css';
function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListProducts />} />
        <Route path='/product/:id' element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;