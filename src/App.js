import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './componentes/navbar';
import Header from './componentes/header';
import Main from './componentes/main';
import Footer from './componentes/footer';
import Registro from './componentes/registro';
import Ranking from './componentes/ranking';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/ranking" element={<Ranking />} />
        {/* Redirecciona a "/" para cualquier ruta no definida */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
