import './Header.css';

const HeaderComponent: React.FC = () => {
    return (
        <header>
            <div className='container-header' id="sidebar">
                <ul>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Relatórios</a></li>
                    <li><a href="#">Gestão de Usuários</a></li>
                    <li><a href="#">Análise de Desempenho</a></li>
                    <li><a href="#">Configurações</a></li>
                    <li><a href="#">Feedback de Clientes</a></li>
                </ul>
            </div>
        </header>
    );
}

export default HeaderComponent;

