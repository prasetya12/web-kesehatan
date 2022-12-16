import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from '../src/pages/Home'
import Artikel from '../src/pages/Artikel'
import DetailArtikel from './pages/DetailArtikel';

function App() {
  const btnClick = () => {
    console.log('hao')
  }

  return (
    <>
      <div className='App'>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/detail" element={<DetailArtikel />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;
