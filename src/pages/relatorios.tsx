import React from "react"
import "./router.css"
import "../app/globals.css";
import {HeaderComponent} from "@/app/Components/Header/Header";
const CreateRelatorios:React.FC = () =>{
    return (
        <>
        <HeaderComponent/>
        <div className="container-router">
            <div>
                <h1>Relatórios</h1>
                <p>Confira os relatórios detalhados sobre o desempenho do sistema.</p>
            </div>
            <div className="card">
                <h2>Relatório de Vendas</h2>
                <p>Visualize o desempenho de vendas durante o mês passado.</p>
                <button>Ver Relatório</button>
            </div>
            <div className="card">
                <h2>Relatório de Usuários</h2>
                <p>Analise o crescimento e a retenção de usuários.</p>
                <button>Ver Relatório</button>
            </div>
            <div className="card">
                <h2>Relatório de Feedbacks</h2>
                <p>Examine o feedback coletado dos usuários e clientes.</p>
                <button>Ver Relatório</button>
            </div>
        </div>
    </>
    );
}
export default CreateRelatorios

