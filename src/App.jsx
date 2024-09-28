import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/tourism/Home';
import CourseHome from './pages/courseSelection/CourseHome';
import Header from './components/header/Header.jsx';

export default function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CourseHome" element={<CourseHome />} />
      </Routes>
    </Router>
  )
}