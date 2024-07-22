import React from 'react';
import Navbar from './componentes/navbar';
import Header from './componentes/header';
import Main from './componentes/main';
import Footer from './componentes/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
