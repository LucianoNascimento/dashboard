import React from "react";
import "./router.css";
import "../app/globals.css";
const CreateConfiguracoes: React.FC = () => {
  return (
    <>
      <div className="container-router">
        <div>
          <h1>Configurações</h1>
          <p>Aqui você pode ajustar suas preferências e configurações do sistema.</p>
        </div>

      
        <div className="settings-form">
          <h2>Alterar Senha</h2>
          <form>
            <label htmlFor="current-password">Senha Atual:</label>
            <input type="password" id="current-password" name="current-password" required />

            <label htmlFor="new-password">Nova Senha:</label>
            <input type="password" id="new-password" name="new-password" required />

            <label htmlFor="confirm-password">Confirmar Nova Senha:</label>
            <input type="password" id="confirm-password" name="confirm-password" required />

            <button type="submit">Alterar Senha</button>
          </form>
        </div>

        <div className="settings-options">
          <h2>Preferências</h2>
          <form>
            <div className="option">
              <label htmlFor="theme">Tema:</label>
              <select id="theme" name="theme">
                <option value="light">Claro</option>
                <option value="dark">Escuro</option>
              </select>
            </div>

            <div className="option">
              <label htmlFor="notifications">Notificações:</label>
              <input type="checkbox" id="notifications" name="notifications" checked />
              <label htmlFor="notifications">Habilitar notificações</label>
            </div>

            <button type="submit">Salvar Configurações</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateConfiguracoes;
