import React, { useState, useEffect} from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import UserInfo from './pages/UserInfo'; // The user detail component
import './index.css'

function App() {


  return (
    <Router>
    <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<UserInfo />} />
    </Routes>
    </main>
    <Footer />
    </div>
</Router>
  );
}

export default App
