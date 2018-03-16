import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import '../../HTMLgetProgramadora/css/agency.css';

import Navbar from './home_components/Navbar';
import Header from './home_components/Header';
import QuemSomos from './home_components/QuemSomos';
import Usuarias from './home_components/Usuarias';
import Empresas from './home_components/Empresas';
import CadastroUsuaria from './home_components/CadastroUsuaria';
import CadastroEmpresa from './home_components/CadastroEmpresa';

class Home extends Component {
  constructor(props){
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
      <div>
        <Navbar />
        <Header />
        <QuemSomos />
        <Usuarias />
        <Empresas />

        {/* <!-- Footer --> */}
        <footer className="bkg-footer-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <span className="copyright">Copyright &copy; Senai Code XP 2018</span>
              </div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-inline quicklinks">
                  <li className="list-inline-item">
                    <a className="item-footer" href="#">(11)4000-0000</a>
                  </li>
                  <li className="list-inline-item">
                    <a className="item-footer" href="#">get@mail.com</a>
                  </li>
                  <li className="list-inline-item">
                    <a className="item-footer" href="#">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        {/* <!-- MODAL LOGIN --> */}
        <div class="portfolio-modal modal fade" id="login" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content modal-content-login">
              <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                  <div class="rl"></div>
                </div>
              </div>
              <div class="container">
                <div class="row">
                  <div class="mx-auto">
                    <div class="modal-body com-lista">
                      <div class="intro-text">
                        <h1 class="intro-lead-in layout-padrao-header">Bem vindo(a) ao:</h1>
                        <img src="img/logos/logo1.png" alt="" class=" logo-header intro-heading text-uppercase"/>
                        <form id="formLogin" name="formulario" action="" method="POST">
                          <label for="RegistrationForm_email" class="required">E-mail <span class="required">*</span></label>
                          <input data-form-group="natural,cadastroPlat" data-form-type="email" data-form-required="" data-form-required-message="Campo obrigatório"
                            data-form-type-message="E-mail inválido. Verifique se digitou corretamente." name="RegistrationForm[email]"
                            id="RegistrationForm_email" type="email" maxlength="40" placeholder="Digite seu email"/>
                          <label for="txtSenha">Senha</label>
                          <input class="input-login-senha botao-login" id="txtSenha" name="senha" type="password" required="" placeholder="Digite uma Senha"
                            title="Senha" />
                          <a class="esqueci-senha" href="#">Esqueci a senha</a>

                          <button type="button" onclick="validarSenha(this)" class="testar button2 botao-login-form">Entrar</button>
                          <a class="close-modal button3 botao-login-form" id="link-cadastro" data-dismiss="modal" data-toggle="modal" href="#cadastro">Cadastrar </a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        {/* <!-- MODAL CADASTRO --> */}
        <div class="portfolio-modal modal fade" id="cadastro" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content modal-content-cadastro">
              <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                  <div class="rl"></div>
                </div>
              </div>
              <div class="container">
                <div class="row">
                  <div class="mx-auto">
                    <div class="modal-body com-lista">
                    <div>
                      <p>Eu sou:</p>
                      <input name="check-tipo-de-cadastro" class="login-customer-personality " type="radio" onClick={() => { this.changeForm(true) }} />
                      Usuaria 
                      <br/>
                      <input name="check-tipo-de-cadastro" class="login-customer-personality " type="radio" onClick={() => { this.changeForm(false) }} />
                      Empresa
                    </div>
                    {
                      this.state.usuarias ? <CadastroUsuaria /> : <CadastroEmpresa />
                    }     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
