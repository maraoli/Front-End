import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router-dom';
import registerServiceWorker from '../../../registerServiceWorker';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

//CSS
import '../../../HTMLgetProgramadora/css/usuaria.css';

//IMG
import UserImg from './user.jpg';

//FILES
import ExibirPerfil from "./exibir_perfil";
import EditarPerfil from "./editar_perfil";

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    render() {
        return (
            <header class="cabecalho-user header-padding">
                <a class="navbar-brand js-scroll-trigger hidden-xs col-xs-offset-4 col-sm-3 col-md-offset-0" href="/usuaria">getProgramadora( );</a>
                <nav class="nav-user-home col-md-8 hidden-md-down">
                    <ul>
                         <li className="">
                                <Link to="/exibir-perfil-usuaria">
                                    Meu Perfil
                                </Link>
                            </li>
                        <li className="">
                            <Link /*to={Vagas}*/ to="/curriculo">
                                Currículo
                            </Link>
                        </li>
                        <li className="">
                            <Link to="/forum">
                                Fórum
                            </Link>
                        </li>
                        <li className="">
                            <Link to="/cursos">
                                Cursos
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
                                        <Link className="nav-link js-scroll-trigger" to="/exibir-perfil-usuaria">
                                            Meu Perfil
                                        </Link>
                                    </li>
                                <li className="nav-item invisible-desk">
                                    <Link className="nav-link js-scroll-trigger" to="/curriculo">
                                        Currículo
                                    </Link>
                                </li>
                                <li className="nav-item invisible-desk">
                                    <Link className="nav-link js-scroll-trigger" to="/forum">
                                        Fórum
                                    </Link>
                                </li>
                                <li className="nav-item invisible-desk">
                                    <Link className="nav-link js-scroll-trigger" to="/cursos">
                                        Cursos
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
        );
    }
}

export default Navbar;