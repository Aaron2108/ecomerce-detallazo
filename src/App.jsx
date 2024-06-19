import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import WhyUs from './pages/WhyUs';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Administrador from './pages/Administrador';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/why" element={<WhyUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Administrador" element={<Administrador/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
