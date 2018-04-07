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
                    <a class="navbar-brand js-scroll-trigger hidden-xs col-xs-offset-4 col-sm-3 " href="./empresa">getProgramadora( );</a>
                    <nav class="nav-user-home col-md-8 hidden-md-down">
                        <ul>
                            <li className="">
                                <Link to="/exibir-perfil-empresa">
                                    Meu Perfil
                                </Link>
                            </li>
                            <li className="">
                                <Link to="/busca">
                                    Buscar Candidatas
                                </Link>
                            </li>
                            <li className="">
                                <Link to="/matchs">
                                    Matchs
                                </Link>
                            </li>
                            <li className="">
                                <Link to="/">
                                    Sair
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <nav class="navbar navbar-expand-lg navbar-dark fixed-top nav-min" id="mainNav">
                        <div class="container">
                            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                Menu
                                <i class="fa fa-bars"></i>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarResponsive"> 
                                <ul className="navbar-nav text-uppercase ml-auto">
                                    <li className="nav-item invisible-desk">
                                            <Link className="nav-link js-scroll-trigger" to="/exibir-perfil-empresa">
                                                Meu Perfil
                                            </Link>
                                        </li>
                                    <li className="nav-item invisible-desk">
                                        <Link className="nav-link js-scroll-trigger" to="/busca">
                                            Buscar Candidatas
                                        </Link>
                                    </li>
                                    <li className="nav-item invisible-desk">
                                        <Link className="nav-link js-scroll-trigger" to="/matchs">
                                            Matches
                                        </Link>
                                    </li>
                                    <li className="nav-item invisible-desk">
                                        <Link className="nav-link js-scroll-trigger" to="/">
                                            Sair
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <span class="img-perfil-space visible-xs">
                        <img src={UserImg} alt="" />
                    </span>
                </header>
            </div>
        );
    }
}

export default Navbar;