import React from 'react'
import './css/Contato.css';

export default function Contato() {
  return (
    <div>
        <section className="contact-form" id="contato">
      <h2 className="contact-me">Contrata <span>Me</span></h2>
      <form action="#">
        <div className="input-box">
          <input type="text" className="labelInput" placeholder="Nome" />

          <input type="email" class="labelInput" placeholder="Email" />
        </div>

        <div class="input-box">
          <input type="number" className="labelInput" placeholder="Telefone" />
          <input type="text" className="labelInput" placeholder="Assunto" />
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Sua Messagem"
        ></textarea>

        <input type="submit" value="Enviar Mensagem" className="btn-1" />
      </form>
    </section>


    </div>
  )
}
