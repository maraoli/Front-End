import React, { Component } from 'react';
// import logo from './HTMLgetProgramadora/img/logos/logo1.png';
import './App.css';
import Home from "./components/pages/Home";
// import Vagas from "./components/vagas_1tela";
import Vagas from "./components/vagas";
import Vagas_educacao from "./components/vagas_educacao";
import Cursos from "./components/cursos";

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    const logo = require('./HTMLgetProgramadora/img/logos/logo1.png');
    return (
      <Router>
        <div>
          {/* <!-- Navigation --> */}
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
                  <li className="nav-item">
                    <Link to="/vagas1tela">
                      <a className="nav-link js-scroll-trigger">Vagas</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/cursos">
                      <a className="nav-link js-scroll-trigger">Cursos</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <p class="login-botao portfolio-link" data-toggle="modal" href="#login">Login</p>
            <p class="login-botao portfolio-link" data-toggle="modal" href="#cadastro">Cadastro</p>
          </nav>

          {/* <!-- Header --> */}
          <header className="masthead">
            <div className="overlay"></div>
            <div className="container header-space">
              <div className="intro-text">
                <div className="intro-lead-in">Bem vindo(a) ao:</div>
                <img src={logo} alt="" className=" logo-header intro-heading text-uppercase" />
              </div>
            </div>
          </header>

          <Route exact path="/" component={Home}/>
          {/*<Route exact path="/vagas_1tela" component={Vagas_1tela}/>*/}
          <Route exact path="/vagas" component={Vagas}/>
          <Route exact path="/vagas_educacao" component={Vagas_educacao}/>
          <Route exact path="/cursos" component={Cursos}/>
        </div>

      </Router>
    );
  }
}

export default App;
