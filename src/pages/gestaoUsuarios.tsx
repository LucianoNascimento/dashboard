import React, { useState } from "react";
import { HeaderComponent } from "@/app/Components/Header/Header";
import "./router.css";
import "../app/globals.css";

const CreateGestaoUsuarios: React.FC = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "João Silva", email: "joao.silva@email.com" },
    { id: 2, name: "Maria Oliveira", email: "maria.oliveira@email.com" },
    { id: 3, name: "Carlos Pereira", email: "carlos.pereira@email.com" },
  ]);

  const [newUser, setNewUser] = useState({ name: "", email: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (newUser.name && newUser.email) {
      const newId = users.length + 1;
      setUsers([...users, { id: newId, name: newUser.name, email: newUser.email }]);
      setNewUser({ name: "", email: "" });
    }
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEditUser = (id: number) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      setNewUser({ name: user.name, email: user.email });
      handleDeleteUser(id);
    }
  };

  return (
    <>
      <HeaderComponent />
      <div className="container-router">
        <div>
          <h1>Gestão de Usuários</h1>
          <p>Administre os usuários do sistema: adicione, edite ou remova usuários conforme necessário.</p>
        </div>

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
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleEditUser(user.id)}
                    >
                      Editar
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="add-user">
          <h2>Adicionar Novo Usuário</h2>
          <form onSubmit={handleAddUser}>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newUser.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
              required
            />

            <button type="submit">Adicionar Usuário</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateGestaoUsuarios;
