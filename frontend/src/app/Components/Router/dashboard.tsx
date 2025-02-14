import React from "react";
import "./router.css";

// Componente CreateDashboard tipado corretamente como React.FC
const CreateDashboard: React.FC = () => {
  return (
    <>
      <div className="container-router">
        <div>
          <h1>Dashboard</h1>
          <p>Bem-vindo ao painel de controle, onde você pode ver suas principais métricas e informações!</p>
        </div>
        <div className="card">
          <h2>Métricas Gerais</h2>
          <p>Aqui estão as métricas mais recentes do seu sistema.</p>
        </div>
        <div className="card">
          <h2>Relatórios</h2>
          <p>Relatórios detalhados sobre o desempenho da plataforma.</p>
        </div>
      </div>
    </>
  );
};

export default CreateDashboard;
