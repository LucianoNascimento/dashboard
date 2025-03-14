import React from "react";
import "./router.css";
import "../app/globals.css";
import {HeaderComponent} from "@/app/Components/Header/Header";
const CreateFeedbackClientes: React.FC = () => {
  return (
    <>
      <HeaderComponent/>
      <div className="container-router">
        <div>
          <h1>Feedback de Clientes</h1>
          <p>Aqui você pode ver os comentários e opiniões dos nossos clientes.</p>
        </div>
        {/* Exibição de feedbacks */}
        <div className="feedback-list">
          <h2>Comentários Recentes</h2>

          <div className="feedback-item">
            <h3>João Silva</h3>
            <p className="feedback-text">"O sistema é muito fácil de usar, a interface é intuitiva e as funcionalidades são ótimas. Recomendo!"</p>
            <p className="feedback-date">Recebido em: 05/02/2025</p>
          </div>

          <div className="feedback-item">
            <h3>Maria Oliveira</h3>
            <p className="feedback-text">"Excelente atendimento e suporte. O produto superou minhas expectativas, e o suporte foi muito rápido!"</p>
            <p className="feedback-date">Recebido em: 04/02/2025</p>
          </div>

          <div className="feedback-item">
            <h3>Carlos Souza</h3>
            <p className="feedback-text">"Fiquei um pouco confuso no começo, mas depois de entender as funcionalidades, o sistema se tornou muito útil."</p>
            <p className="feedback-date">Recebido em: 03/02/2025</p>
          </div>
        </div>

        {/* Formulário para enviar feedback */}
        <div className="feedback-form">
          <h2>Deixe seu Feedback</h2>
          <form>
            <label htmlFor="name">Seu Nome:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="feedback">Seu Feedback:</label>
            <textarea id="feedback" name="feedback" rows={4} required></textarea>


            <button type="submit">Enviar Feedback</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateFeedbackClientes;
