import React from "react";
import "./router.css";

const CreateAnaliseDesempenho: React.FC = () => {
  return (
    <>
    <div className="container-router">
        <div>
          <h1>Análise de Desempenho</h1>
          <p>Acompanhe o desempenho do sistema com métricas chave e gráficos.</p>
        </div>
     
        <div className="performance-metrics">
          <h2>Métricas de Desempenho</h2>
          <div className="metric">
            <h3>Taxa de Conversão</h3>
            <p className="metric-value">85%</p>
          </div>
          <div className="metric">
            <h3>Tempo Médio de Resposta</h3>
            <p className="metric-value">300ms</p>
          </div>
          <div className="metric">
            <h3>Disponibilidade</h3>
            <p className="metric-value">99.9%</p>
          </div>
        </div>

        <div className="chart">
          <h2>Gráfico de Desempenho</h2>
          <div className="chart-placeholder">
            <p>Aqui pode ser um gráfico de desempenho (Exemplo: taxa de conversão ao longo do tempo).</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAnaliseDesempenho;
