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
import Kategori from './pages/Kategori';
import DetailKategori from './pages/DetailKategori';
import Hospital from './pages/Hosptal';
import DetailHospital from './pages/DetailHospital';
import TanyaDokter from './pages/TanyaDokter';




function App() {


  return (
    <>
      <div className='App'>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/kategori" element={<Kategori />} />
            <Route path="/detail" element={<DetailKategori />} />
            <Route path="/hospital" element={<Hospital />} />
            <Route path="/detail-hospital/:id" element={<DetailHospital />} />
            <Route path="/tanya-dokter" element={<TanyaDokter />} />

          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;
