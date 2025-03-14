/*import React from "react";
import Link from 'next/link';
import './Header.css';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from "@radix-ui/react-navigation-menu";
export function HeaderComponent() {
    return (
        <header>
            <div className="container-header" id="sidebar">
                <NavigationMenu>
                    <ul>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/inicio">Inicio</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/dashboard">Dashboard</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/relatorios">Relatórios</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/gestaoUsuarios">Gestão de Usuários</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/analiseDesempenho">Análise de Desempenho</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/configuracoes">Configurações</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/feedbackClientes">Feedback de Clientes</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </ul>
                </NavigationMenu>
            </div>
        </header>
    );
};
*/
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import './Header.css';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from "@radix-ui/react-navigation-menu";

export function HeaderComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Função para alternar o estado do menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Garantir que o menu está fechado quando a tela for redimensionada para menos de 768px
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false); // Fecha o menu ao aumentar a largura
            }
        };

        window.addEventListener('resize', handleResize);

        // Limpeza do listener de evento
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="header">
            <div className="container-header" id="sidebar">
                {/* Botão de hambúrguer visível apenas em telas pequenas */}
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰ {/* Ícone de hambúrguer */}
                </button>

                <NavigationMenu>
                    <ul className={isMenuOpen ? 'open' : ''}>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/inicio">Inicio</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/dashboard">Dashboard</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/relatorios">Relatórios</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/gestaoUsuarios">Gestão de Usuários</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/analiseDesempenho">Análise de Desempenho</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/configuracoes">Configurações</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/feedbackClientes">Feedback de Clientes</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </ul>
                </NavigationMenu>
            </div>
        </header>
    );
}
