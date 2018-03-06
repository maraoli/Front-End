import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/pages/Home";
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
          <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
              <!--<img class="navbar__logo navbar-brand js-scroll-trigger" href="#page-top" src="img/logos/logo.png" alt="">-->
              <a class="navbar-brand js-scroll-trigger" href="#page-top">getProgramadora( );</a>
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fa fa-bars"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ml-auto">
                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#services">Quem Somos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#para-usuarias"> Para Usuárias</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#para-empresas">Para Empresas</a>
                  </li>
                  <li class="nav-item invisible-desk">
                    <a class="nav-link js-scroll-trigger" href="#para-empresas">Login</a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- class="portfolio-link" data-toggle="modal" href="#portfolioModal2" -->
            <button class="login-botao portfolio-link" data-toggle="modal" href="#login">Login</button>
          </nav>
      
          {/* <!-- Header --> */}
          <header class="masthead">
            <div class="overlay"></div>
            <div class="container header-space">
              <div class="intro-text">
                <div class="intro-lead-in">Bem vindo(a) ao:</div>
                <img src="img/logos/logo1.png" alt="" class=" logo-header intro-heading text-uppercase">
                <!--<div class="intro-heading text-uppercase">It's Nice To Meet You</div>-->
                <!--<a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>-->
              </div>
            </div>
          </header>

          <Route exact path="/" component={Home}/>
        </div>

      </Router>
    );
  }
}

export default App;
