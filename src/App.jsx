import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from './UI/Layout';
import Contact from './pages/Contact';
import About from './pages/About';
import './App.css';
import React from 'react';
import { Suspense } from 'react';
import LoadingSpinner from './Components/LoadingSpinner';

const Gallery = React.lazy(() => import('./pages/Gallery'));
const Proizvod = React.lazy(() => import('./Components/Proizvod'));
const Products = React.lazy(() => import('./pages/Products'));

function App() {
  return (
    <>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />

            <Route path='/about' element={<About />} />
            <Route path='/products/'>
              <Route index element={<Products />} />
            </Route>
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
