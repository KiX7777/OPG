import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Layout from './UI/Layout'
import Contact from './pages/Contact'
import About from './pages/About'
import './App.css'
import React from 'react'
import { Suspense } from 'react'
import LoadingSpinner from './Components/LoadingSpinner'
import DocumentMeta from 'react-document-meta'
import updateTitle from './Components/helpers/titleUpdate'
const Gallery = React.lazy(() => import('./pages/Gallery'))
const Products = React.lazy(() => import('./pages/Products'))
const meta = {
  title: 'Pčelarstvo Božić',
  description: 'Pčelarstvo Božić || OPG Božić',

  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'pčelarstvo, božić, med, opg',
    },
  },
}

function App() {
  const [isHome, setIsHome] = useState(true)
  const [pageTitle, setpageTitle] = useState(document.title)
  updateTitle(pageTitle)

  return (
    <>
      <Layout setIsHome={setIsHome} isHome={isHome}>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route
              path='/'
              element={<Navigate to='/home' setTitle={setpageTitle} />}
            />
            <Route
              path='/home'
              element={
                <Home
                  setIsHome={setIsHome}
                  setTitle={setpageTitle}
                  isHome={isHome}
                />
              }
            />

            <Route path='/about' element={<About setTitle={setpageTitle} />} />
            <Route path='/products/'>
              <Route index element={<Products setTitle={setpageTitle} />} />
            </Route>
            <Route
              path='/gallery'
              element={<Gallery setTitle={setpageTitle} />}
            />
            <Route
              path='/contact'
              element={<Contact setTitle={setpageTitle} />}
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
      <DocumentMeta {...meta} />
    </>
  )
}

export default App
