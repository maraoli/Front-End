import React, { Component } from 'react';
import logo from './logo.svg';
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

    return (
      <Router>
        <div>
          {/* <!-- Navigation --> */}
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#page-top">getProgramadora( );</a>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fa fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#services">Quem Somos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#para-usuarias"> Para Usuárias</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#para-empresas">Para Empresas</a>
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
                  
                  <li className="nav-item invisible-desk">
                    <a className="nav-link js-scroll-trigger" href="#para-empresas">Login</a>
                  </li>
                </ul>
              </div>
            </div>
            <button className="login-botao portfolio-link" data-toggle="modal" href="#login">Login</button>
          </nav>
      
          {/* <!-- Header --> */}
          <header className="masthead">
            <div className="overlay"></div>
            <div className="container header-space">
              <div className="intro-text">
                <div className="intro-lead-in">Bem vindo(a) ao:</div>
                <img src="img/logos/logo1.png" alt="" className=" logo-header intro-heading text-uppercase" />
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
