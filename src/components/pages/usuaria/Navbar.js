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
            <header class="cabecalho-user">
                <a class="navbar-brand js-scroll-trigger" href="./usuaria">getProgramadora( );</a>
                <nav class="nav-user-home col-md-8">
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
                <span class="img-perfil-space">
                    <img src={UserImg} alt="" />
                </span>
            </header>
        );
    }
}

export default Navbar;