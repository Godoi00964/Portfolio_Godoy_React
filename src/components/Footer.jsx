import React from 'react'
import './css/Footer.css';

export default function Footer() {
  return (
    <div>
        <footer className="footer">
      <div className="social">
        <a href="#"><i className="bx bxl-facebook-circle"></i></a>
        <a href="https://www.linkedin.com/feed/?trk=nav_back_to_linkedin" target="_blank"><i className="bx bxl-linkedin-square"></i></a>
        <a href="https://www.instagram.com/eduardofrancodegodoi/" target="_blank"><i className="bx bxl-instagram"></i></a>
      </div>

      <ul className="list">
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>
      <p className="copyright">
        © 2026 Eduardo Godoy | Todos os Direitos Reservados
      </p>
    </footer>
    </div>
  )
}
