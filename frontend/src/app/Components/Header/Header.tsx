// HeaderComponent.tsx
import React from "react";
import Link  from 'next/link';
import './Header.css';

const HeaderComponent: React.FC = () => {
    return (
        <header>
            <div className='container-header' id="sidebar">
                <ul>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                    <li><Link href="/relatorios">Relatórios</Link></li>
                    <li><Link href="/gestao-usuarios">Gestão de Usuários</Link></li>
                    <li><Link href="/analise-desempenho">Análise de Desempenho</Link></li>
                    <li><Link href="/configuracoes">Configurações</Link></li>
                    <li><Link href="/feedback-clientes">Feedback de Clientes</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default HeaderComponent;
