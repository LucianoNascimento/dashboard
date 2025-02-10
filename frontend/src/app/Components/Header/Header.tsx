import './Header.css';

const HeaderComponent: React.FC = () => {
    return (
        <aside>

            <div className='sidebar' id="sidebar">
                <h2>Menu</h2>
                <ul>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Relatórios</a></li>
                    <li><a href="#">Gestão de Usuários</a></li>
                    <li><a href="#">Análise de Desempenho</a></li>
                    <li><a href="#">Configurações</a></li>
                    <li><a href="#">Feedback de Clientes</a></li>
                </ul>
            </div>
        </aside>
    );
}

export default HeaderComponent;
