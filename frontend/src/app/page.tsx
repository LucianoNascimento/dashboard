"use client";
import "./globals.css";
import React from "react";
import HeaderComponent from "./Components/Header/Header";
import FooterComponent from "./Components/Footer/Footer";
import AsideDashboard from "./Components/Aside/Aside";
import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
import 'leaflet/dist/leaflet.css';
import CreateDashboard from "../pages/dashboard";
import CreateRelatorios from "../pages/relatorios";
import CreateGestaoUsuarios from "../pages/gestao-de-usuarios"
import CreateConfiguracoes from "../pages/configuracoes";
import CreateAnaliseDesempenho from "../pages/analise-de-desempenho";
import CreateFeedbackClientes from "../pages/feedback-de-clientes";
import SectionComponent from "./Components/Section/Section";


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
       
        <SectionComponent/>
        <FooterComponent/>
      </Router>  
    </div>
  );
}
