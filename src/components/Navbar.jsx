import React, { useState } from 'react'
import './css/Navbar.css';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
         <a href="#" className="logo"><img src="img/logo.png" alt="logo do site" /></a>

      <nav className={`navbar ${isOpen ? 'active' : ''}`}>
        <a href="#inicio" className="active" onClick={() => setIsOpen(false)}>Inicio</a>
        <a href="#sobre" onClick={() => setIsOpen(false)}>Sobre</a>        
        <a href="#educacao" onClick={() => setIsOpen(false)}>Educação</a>
      </nav>
      <Button href="#contato" type="contact" onClick={() => setIsOpen(false)}>Contato</Button>
      <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  )
}
