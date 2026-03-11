import React from 'react'
import './css/Home.css';
import Button from './Button';

export default function Home() {
  return (
    <div>
        <section className="home" id="inicio">
      <div className="home-content">
        <h3>Oi</h3>
        <h1>
          Eu sou <span>Eduardo Godoy<br /></span>Desenvolvedor Front-End.
        </h1>
        <p>
          Um desenvolvedor front-end cria a parte visual e interativa de sites e
          aplicativos (o "lado do cliente"), transformando designs em código
          funcional usando HTML, CSS e JavaScript para garantir que tudo seja
          intuitivo, responsivo em diferentes telas e ofereça uma boa
          experiência ao usuário (UX).
        </p>
        <br />
        <div className="btn-box">
          <Button href="#contato" type="btn-1">Contato</Button>
          <Button href="#sobre" type="btn-2">Saiba mais</Button>
        </div>
      </div>
      <div className="img-box">
        <img src="img/busto3.jpg" alt="" />
      </div>
    </section>

    </div>
  )
}
