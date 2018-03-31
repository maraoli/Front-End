import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

//IMG
import UserImg from './user.jpg';

class Navbar extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }
    render() {
        return(
            <div>
                <header class="cabecalho-user">
                    <a class="navbar-brand js-scroll-trigger" href="#page-top">getProgramadora( );</a>
                    <nav class="nav-user-home col-md-8">
                        <ul>
                            <li className="">
                                <Link to="/exibir-perfil-empresa">
                                    Meu Perfil
                                </Link>
                            </li>
                            <li className="">
                                <Link to="/curriculo">
                                    Buscar Candidatas
                                </Link>
                            </li>
                            <li className="">
                                <Link to="/cursos">
                                    Matches
                                </Link>
                            </li>
                            {/* <li className="">
                                <Link to="/cursos">
                                    Filtros Salvos
                                </Link>
                            </li>
                            <li className="">
                                <Link to="/cursos">
                                    Candidatas Salvas
                                </Link>
                            </li> */}
                            <li className="">
                                <Link to="/">
                                    Sair
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <span class="img-perfil-space">
                        <img src={UserImg} alt="" />
                    </span>
                </header>
            </div>
        );
    }
}

export default Navbar;