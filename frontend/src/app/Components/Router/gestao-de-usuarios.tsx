import React from "react";
import "./router.css";

const CreateGestaoUsuarios: React.FC = () => {
  return (
    <>
      <header>
        <h1>Gestão de Usuários</h1>
        <p>Administre os usuários do sistema: adicione, edite ou remova usuários conforme necessário.</p>
      </header>

      <section className="content">
        <div className="user-list">
          <h2>Lista de Usuários</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>João Silva</td>
                <td>joao.silva@email.com</td>
                <td>
                  <button className="edit-btn">Editar</button>
                  <button className="delete-btn">Excluir</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Maria Oliveira</td>
                <td>maria.oliveira@email.com</td>
                <td>
                  <button className="edit-btn">Editar</button>
                  <button className="delete-btn">Excluir</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Carlos Pereira</td>
                <td>carlos.pereira@email.com</td>
                <td>
                  <button className="edit-btn">Editar</button>
                  <button className="delete-btn">Excluir</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="add-user">
          <h2>Adicionar Novo Usuário</h2>
          <form>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <button type="submit">Adicionar Usuário</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CreateGestaoUsuarios;
