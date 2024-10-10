import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header'; 
import Footer from './components/common/Footer'; 
import MainPage from './pages/MainPage'; 
import BusinessInfo from './pages/BusinessInfo'; 
import RegisterInterest from './pages/RegisterInterest'; 
import Location from './pages/Location'; 
import Community from './pages/Community'; 
import ComplexInfo from './pages/ComplexInfo'; 

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route index path="/" element={<MainPage />} />
        <Route path="/business-info" element={<BusinessInfo />} />
        <Route path="/register-interest" element={<RegisterInterest />} />
        <Route path="/location" element={<Location />} />
        <Route path="/community" element={<Community />} />
        <Route path="/complex-info" element={<ComplexInfo />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
