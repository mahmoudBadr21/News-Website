'use client'
import React from 'react'
import './all.min.css'
import Header from './components/common/header/Header'
import { Route, Routes } from 'react-router-dom'
import Homepages from './components/home/Homepages'
import Footer from './components/common/footer/Footer'
import Culture from './components/culture/Culture'
import SinglePage from './components/singlePage/SinglePage'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepages />} exact />
        <Route path='/singlePage/:id' element={<SinglePage />} exact />
        <Route path='/culture' element={<Culture />} exact />
      </Routes>
      <Footer />
    </>
  )
}

export default App

