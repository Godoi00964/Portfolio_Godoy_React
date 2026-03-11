import React from 'react'
import './css/Sobre.css';
import Button from './Button';


export default function Sobre() {
  return (
    <div>
        <section className="sobre" id="sobre">
      <div className="sobre-img">
        <img src="img/busto2.png" alt="" />
      </div>
      <div className="sobre-content">
        <h2>Sobre <span>Me</span></h2>
        <h3>Um <span>Developer</span></h3>
        <p>
          "Apaixonado por transformar design em código funcional. Estudante de
          desenvolvimento Front-End focado em criar interfaces responsivas e
          intuitivas com HTML, CSS e JavaScript. Buscando minha primeira
          oportunidade para evoluir com React e contribuir para ótimas
          experiências do usuário."
        </p>
        <p>
          Com uma paixão genuína por tecnologia e design, comecei minha
          trajetória desconstruindo páginas da web para entender como a mágica
          acontecia. Ao contrário da visão antiga, entendo o front-end não
          apenas como "fazer o site ficar bonito", mas como a engenharia da
          experiência do usuário. Sou especializado em transformar designs
          complexos em código limpo, funcional e acessível, unindo os mundos de
          design e programação.
        </p>
        <p>
          Minha carreira é moldada pela evolução acelerada da web. Com o
          amadurecimento das ferramentas de Inteligência Artificial, deixei de
          focar apenas na sintaxe para focar na arquitetura e na validação. A IA
          é minha aliada para acelerar a escrita de componentes, permitindo-me
          focar no que realmente importa: a experiência do usuário, a
          performance e a resolução de problemas complexos.
        </p>
        <Button href="#" type="btn-2">Experiencia</Button>
      </div>
    </section>
    </div>
  )
}
