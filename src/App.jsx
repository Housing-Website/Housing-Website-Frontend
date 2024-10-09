import React from 'react'
import MainPage from './pages/MainPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
