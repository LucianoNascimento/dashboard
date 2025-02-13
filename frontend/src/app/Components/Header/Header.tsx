// HeaderComponent.tsx
import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const HeaderComponent: React.FC = () => {
    return (
        <header>
            <div className='container-header' id="sidebar">
                <ul>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/relatorios">Relatórios</Link></li>
                    <li><Link to="/gestao-usuarios">Gestão de Usuários</Link></li>
                    <li><Link to="/analise-desempenho">Análise de Desempenho</Link></li>
                    <li><Link to="/configuracoes">Configurações</Link></li>
                    <li><Link to="/feedback-clientes">Feedback de Clientes</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default HeaderComponent;
