import './Footer.css';

const FooterComponent: React.FC = () => {
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
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
        <div className="additional-info">
          <h2>Informações</h2>
          <p>© 2024 Meu Site. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
