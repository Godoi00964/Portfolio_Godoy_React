import React from 'react'
import './css/Educacao.css';


export default function Educacao() {
  return (
    <div>
         <section className="secao" id="educaçao">
      <h2>Diciplinas em Estudo.</h2>
      <div className="educacao">
        <div className="card">
          <img src="img/html.png" />
          <h3>Desenvolvimento de Sites</h3>
          <p>
            HTML (HyperText Markup Language) é a linguagem padrão para
            estruturar e dar sentido ao conteúdo de páginas web, definindo
            elementos como parágrafos, títulos, links e imagens. Não é uma
            linguagem de programação, mas de marcação, utilizando tags.
          </p>
        </div>
        <div className="card">
          <img src="img/css-3.png" />
          <h3>Desenvolvimento de Apps</h3>
          <p>
            CSS (Cascading Style Sheets) é uma linguagem declarativa essencial
            para o desenvolvimento web, responsável por definir a aparência
            visual (estilo, layout, cores, fontes) de documentos estruturados
            com HTML. Ele separa o conteúdo do design, permitindo layouts
            responsivos, consistência visual em várias páginas e fácil
            manutenção através de "cascata" e regras de estilo.
          </p>
        </div>
        <div className="card">
          <img src="img/js.png" />
          <h3>Marketing Digital</h3>
          <p>
            JavaScript (frequentemente abreviado como JS) é uma das linguagens
            de programação mais populares e essenciais do mundo, sendo a espinha
            dorsal da interatividade na web. Enquanto HTML estrutura e CSS
            estiliza, o JavaScript adiciona comportamento e dinamicidade às
            páginas.
          </p>
        </div>
      </div>
    </section>
    </div>
  )
}

