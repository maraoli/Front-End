import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

import ParaUsuarias from './paraUsuarias/index';
import ParaEmpresas from './paraEmpresas/index';
import Vagas from "../../vagas";
import Cursos from "../../cursos";

// antigo About
class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usuarias: false
        }
    }

    changeForm(isUsuarias){
        this.setState({
            usuarias: isUsuarias
        })
    }

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">getProgramadora( );</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fa fa-bars"></i>
                    </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ml-auto">
                    <li class="nav-item invisible-desk">
                        <a class="nav-link" data-toggle="modal" href="#login">Login</a>
                    </li>
                    <li class="nav-item invisible-desk">
                        <a class="nav-link" data-toggle="modal" href="#cadastro">Cadastro</a>
                        <div>
                            Usuaria:
                            Empresa:   
                        </div>   
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#services">Quem Somos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#para-usuarias"> Para Usuárias</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#para-empresas">Para Empresas</a>
                    </li>
                    {/*<li className="nav-item">
                        <Link to="/vagas1tela">
                        <a className="nav-link js-scroll-trigger">Vagas</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cursos">
                        <a className="nav-link js-scroll-trigger">Cursos</a>
                        </Link>
                    </li>*/}
                    </ul>
                </div>
                </div>
                <p class="login-botao portfolio-link" data-toggle="modal" href="#login">Login</p>
                <p class="login-botao portfolio-link" data-toggle="modal" href="#cadastro">Cadastro</p>
            </nav>
        );
    }
}

export default Navbar;