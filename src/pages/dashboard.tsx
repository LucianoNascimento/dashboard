import React from "react";
import "./router.css";  // Certifique-se de que está estilizando corretamente
import "../app/globals.css";  // Se necessário, importando estilos globais
import HeaderComponent from "@/app/Components/Header/Header";
import ChartComponent from "../pages/chart";  // Importando o ChartComponent

const CreateDashboard: React.FC = () => {
  return (
    <>
      <HeaderComponent />  {/* Importando o HeaderComponent */}
      
      <div className="container-dashboard">
        {/* Seção de Introdução */}
        <section className="intro-section">
          <p>Bem-vindo ao painel de controle, onde você pode ver suas principais métricas e informações!</p>
        </section>
        
        {/* Cards com as métricas */}
        <div className="cards-container">
          <div className="card">
            <h2>Métricas Gerais</h2>
            <p>Aqui estão as métricas mais recentes do seu sistema.</p>
          </div>
          <div className="card">
            <h2>Relatórios</h2>
            <p>Relatórios detalhados sobre o desempenho da plataforma.</p>
          </div>
        </div>

        {/* Gráfico detalhado */}
        <div className="chart-section">
          <h2>Vendas Mensais</h2>
          <ChartComponent />  {/* Renderizando o gráfico */}
        </div>
      </div>
    </>
  );
};

export default CreateDashboard;
