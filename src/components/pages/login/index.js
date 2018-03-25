import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// IMPORT PAGES
import Usuaria from '../usuaria/index';

// IMPORT IMAGENS
import Logo from './logo1.png';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
    }
  }
  render() {
    return (
        <div class="portfolio-modal modal fade" id="login" tabindex="-1" role="dialog" aria-hidden="true">
          <div>
            <Usuaria />
          </div>
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
                        <img src={Logo} alt="" class=" logo-header intro-heading text-uppercase"/>
                        <form id="formLogin" name="formulario" action="" method="POST">
                          <label for="RegistrationForm_email" class="required">E-mail <span class="required">*</span></label>
                          <input data-form-group="natural,cadastroPlat" data-form-type="email" data-form-required="" data-form-required-message="Campo obrigatório"
                            data-form-type-message="E-mail inválido. Verifique se digitou corretamente." name="RegistrationForm[email]"
                            id="RegistrationForm_email" type="email" maxlength="40" placeholder="Digite seu email"/>
                          <label for="txtSenha">Senha</label>
                          <input class="input-login-senha botao-login" id="txtSenha" name="senha" type="password" required="" placeholder="Digite uma Senha"
                            title="Senha" />
                          <a class="esqueci-senha" href="#">Esqueci a senha</a>
                          <Link to="/usuaria/index">
                            <button type="button" onclick="validarSenha(this)" class="testar button2 botao-login-form">
                              <a class="close-modal botao-login-form" id="link-cadastro" data-dismiss="modal" data-toggle="modal">Entrar</a>
                            </button>
                          </Link>
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
    );
  }
}

export default Login;