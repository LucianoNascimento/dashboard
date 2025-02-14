"use client";
import "./globals.css";
import React from "react";
import HeaderComponent from "./Components/Header/Header";
import FooterComponent from "./Components/Footer/Footer";
import AsideDashboard from "./Aside/Aside";
import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
import 'leaflet/dist/leaflet.css';
import CreateDashboard from "./Components/Router/dashboard";
import CreateRelatorios from "./Components/Router/relatorios";
import CreateGestaoUsuarios from "./Components/Router/gestao-de-usuarios"
import CreateConfiguracoes from "./Components/Router/configuracoes";
import CreateAnaliseDesempenho from "./Components/Router/analise-de-desempenho";
import CreateFeedbackClientes from "./Components/Router/feedback-de-clientes";


export default function Home() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
          <Routes>
            <Route path= "/dashboard" element= {<CreateDashboard/>}/>
            <Route path="/relatorios" element= {<CreateRelatorios/>}/>
            <Route path="/gestao-usuarios" element= {<CreateGestaoUsuarios/>}/>
            <Route path="/analise-desempenho" element= {<CreateAnaliseDesempenho/>}/>
            <Route path="/configuracoes" element= {<CreateConfiguracoes/>}/>
            <Route path="/feedback-clientes" element= {<CreateFeedbackClientes/>}/>
          </Routes>
        <AsideDashboard/>
        <FooterComponent/>
      </Router>  
    </div>
  );
}
