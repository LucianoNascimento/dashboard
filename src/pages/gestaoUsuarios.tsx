import FooterComponent from "@/app/Components/Footer/Footer";
import {HeaderComponent} from "@/app/Components/Header/Header";
import React, { useState } from "react";

const usersData = [
  { id: 1, name: "João Silva", email: "joao.silva@email.com" },
  { id: 2, name: "Maria Oliveira", email: "maria.oliveira@email.com" },
  { id: 3, name: "Carlos Pereira", email: "carlos.pereira@email.com" },
];

const GestaoUsuarios: React.FC = () => {
  const [users, setUsers] = useState(usersData);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  const handleAddUser = () => {
    const newUserId = users.length + 1;
    setUsers([...users, { id: newUserId, ...newUser }]);
    setNewUser({ name: "", email: "" }); // Limpa os campos após adicionar
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEditUser = (id: number, updatedName: string, updatedEmail: string) => {
    setUsers(
      users.map(user => 
        user.id === id 
          ? { ...user, name: updatedName, email: updatedEmail } 
          : user
      )
    );
  };

  return (
    <div className="container mx-auto p-6">
      {/* Header Component */}
      <HeaderComponent />
      
      <h2 className="text-2xl font-semibold mb-4">Gestão de Usuários</h2>

      <div className="bg-white p-4 shadow-md mb-6">
        <h3 className="text-xl font-medium mb-2">Adicionar Novo Usuário</h3>
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Nome"
            className="border p-2 rounded-md w-full"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded-md w-full"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <button
            onClick={handleAddUser}
            className="bg-green-500 text-white p-2 rounded-md"
          >
            Adicionar Usuário
          </button>
        </div>
      </div>

      <div className="bg-white p-4 shadow-md">
        <h3 className="text-xl font-medium mb-2">Lista de Usuários</h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Nome</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    className="border p-2 rounded-md w-full"
                    value={user.name}
                    onChange={(e) => handleEditUser(user.id, e.target.value, user.email)}
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="email"
                    className="border p-2 rounded-md w-full"
                    value={user.email}
                    onChange={(e) => handleEditUser(user.id, user.name, e.target.value)}
                  />
                </td>
                <td className="border px-4 py-2 flex gap-2">
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="bg-red-500 text-white p-2 rounded-md"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Component */}
      <FooterComponent />
    </div>
  );
};

export default GestaoUsuarios;
