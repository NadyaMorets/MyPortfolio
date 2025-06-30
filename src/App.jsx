import { useState } from 'react';
import './App.css';
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
      <Header />
      <section id="home"><Home /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
