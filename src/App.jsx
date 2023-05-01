import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from './UI/Layout';
import Contact from './pages/Contact';
import About from './pages/About';
import Products from './pages/Products';
import Gallery from './pages/Gallery';

import './App.css';
import Proizvod from './Components/Proizvod';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />

          <Route path='/about' element={<About />} />
          <Route path='/products/'>
            <Route index element={<Products />} />
            <Route path=':productId' element={<Proizvod />} />
          </Route>
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
