import './Footer.css';
//import '@/app/globals.css';
import React from "react";

export function FooterComponent() {
  return (
    <footer className='container-footer'>
      <div className="contact">
        <div className="contact-info">
          <h2>Contatos</h2>
          <p>Email: contato@exemplo.com</p>
          <p>Telefone: (11) 12345-6789</p>
          <p>Endereço: Rua Exemplo, 123, Cidade, Estado</p>
        </div>
        <div className="social-media">
          <h2>Redes Sociais</h2>
            <div className='redes-links'>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>

        </div>
        <div className="additional-info">
          <h2>Informações</h2>
          <p>© 2024 Meu Site. Todos os direitos reservados.</p>
        </div>
        <footer></footer>
      </div>
    </footer>
  );
}
