import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './componentes/navbar';
import Header from './componentes/header';
import Main from './componentes/main';
import Footer from './componentes/footer';
import Registro from './componentes/registro';
import Ranking from './componentes/ranking';
import Login from './componentes/login';
import Perfil from './componentes/perfil';
import QuienesSomos from './componentes/quienessomos';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfil" element={<ProtectedRoute component={Perfil} />} />
          <Route path="/quienessomos" element={<QuienesSomos />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

function ProtectedRoute({ component: Component }) {
  const { loggedIn } = useAuth();
  return loggedIn ? <Component /> : <Navigate to="/login" />;
}

export default App;
