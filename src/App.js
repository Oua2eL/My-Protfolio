import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Skills from './components/skills/Skills';
import Projects from './components/project/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';



const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App;

