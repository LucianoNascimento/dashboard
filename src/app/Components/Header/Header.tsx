import React from "react";
import Link  from 'next/link';
import './Header.css';

export function HeaderComponent ()  {
    return (
        <header>
            <div className='container-header' id="sidebar">
                <ul>
                    <li><Link href="/inicio">Inicio</Link></li>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                    <li><Link href="/relatorios">Relatórios</Link></li>
                    <li><Link href="/gestaoUsuarios">Gestão de Usuários</Link></li>
                    <li><Link href="/analiseDesempenho">Análise de Desempenho</Link></li>
                    <li><Link href="/configuracoes">Configurações</Link></li>
                    <li><Link href="/feedbackClientes">Feedback de Clientes</Link></li>
                </ul>
            </div>
        </header>
    );
};


