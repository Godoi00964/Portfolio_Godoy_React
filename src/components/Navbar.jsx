import React from 'react'
import './css/Navbar.css';

export default function Navbar() {
  return (
    <header className="header">
         <a href="#" className="logo"><img src="img/logo.png" alt="logo do site" /></a>

      <nav className="navbar">
        <a href="#inicio" className="active">Inicio</a>
        <a href="#sobre">Sobre</a>        
        <a href="#educaçao">Educação</a>
      </nav>
      <a href="#contato" class="contact">Contato</a>
      <div class="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  )
}
