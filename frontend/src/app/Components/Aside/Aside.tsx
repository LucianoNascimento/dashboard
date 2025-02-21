// AsideDashboard.tsx
"use client";
import React, { useState } from "react";
import MapComponent from "./map"; 
import "./Aside.css";

const AsideDashboard: React.FC = () => {
  const [region, setRegion] = useState<string>("todos");
  const [totalSales, setTotalSales] = useState<number>(0);
  const [topProducts, setTopProducts] = useState<string[]>([
    "Produto 1",
    "Produto 2",
    "Produto 3",
  ]);

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  // Função para atualizar a região selecionada
  const updateRegion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(event.target.value);
  };

  // Função para calcular as vendas (exemplo simples)
  const calculateSales = () => {
    let sales = 0;
    if (region === "norte") sales = 1000;
    else if (region === "sul") sales = 800;
    else if (region === "leste") sales = 1200;
    else if (region === "oeste") sales = 900;
    else sales = 5000; // Todos
    setTotalSales(sales);
  };

  return (
    <div className="dashboard-container">
      <aside className="container-aside">
        <div id="dashboard-vendas">
          <h1>Dashboard de Vendas</h1>

          <div className="produtos">
            <h2>Filtros</h2>
            <label htmlFor="region">Região:</label>
            <select id="region" value={region} onChange={updateRegion}>
              <option value="todos">Todos</option>
              <option value="norte">Norte</option>
              <option value="sul">Sul</option>
              <option value="leste">Leste</option>
              <option value="oeste">Oeste</option>
            </select>
            <br />
            <br />
            <button onClick={calculateSales}>Calcular Vendas</button>
            <h3>Total de Vendas: <span id="totalSales">{totalSales}</span></h3>
          </div>

          <div className="produtos">
            <h2>Produtos Mais Pedidos</h2>
            <ul id="topProducts">
              {topProducts.map((product, index) => (
                <li key={index}>{product}</li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
      
      {/* O MapComponent agora está sendo exibido ao lado do Aside */}
      <div className="map-container">
        <MapComponent center={center} />
      </div>
    </div>
  );
};

export default AsideDashboard;
