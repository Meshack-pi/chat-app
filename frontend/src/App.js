import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element = { <Home />} />
        <Route path="/" element = { <Home />} />
        <Route path="/login" element = { <Home />} />
        <Route path="signup/" element = { <Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
