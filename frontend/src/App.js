import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element = { <Home />} />
        <Route path="/login" element = { <Login />} />
        <Route path="/signup" element = { <Signup />} />
        <Route path="/chat" element = { <Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;