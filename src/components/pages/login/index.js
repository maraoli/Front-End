import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import * as axios from "axios";

// IMPORT PAGES
import Usuaria from '../usuaria/index';

// IMPORT IMAGENS
import Logo from './logo1.png';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      form: {
        email: '',
        senha: ''
      }
    }

    this.entrar = this.entrar.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  entrar() {
    // usar axios para chamar o backend
    console.log('form', this.state.form)
    axios.post('http://122855b5.ngrok.io/api/Login', this.state.form)
        .then(function (response) {
            console.log(response);
            // save in local storege
            // console.log('response', response)
            // localStorage.setItem('usuario', JSON.stringfy(response.data))
        })
        .catch(function (error) {
            console.log(error);
            console.log(error.status);
            // console.log(response.statusText);
            // console.log(response.headers);
            // console.log(response.config);
        });
  }

  handleChange(prop, event) {
    var form = this.state.form;
    form[prop] = event.target.value;

    this.setState({ form: form });
}

  render() {
    return (
        <div class="portfolio-modal modal fade" id="login" tabindex="-1" role="dialog" aria-hidden="true">
          {/* <div>
            <Usuaria />
          </div> */}
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
                          <input 
                            id="RegistrationForm_email" 
                            type="email" 
                            name="email"
                            maxlength="40" 
                            placeholder="Digite seu email"
                            value={this.state.form["email"]} 
                            onChange={(e) => { this.handleChange("email", e) }} 
                            data-form-group="natural,cadastroPlat" 
                            data-form-type="email" 
                            data-form-required="" 
                            data-form-required-message="Campo obrigatório"
                            data-form-type-message="E-mail inválido. Verifique se digitou corretamente." 
                            />
                          
                          <label for="txtSenha">Senha</label>
                          <input 
                            id="txtSenha" 
                            class="input-login-senha botao-login" 
                            type="password" 
                            name="senha" 
                            placeholder="Digite uma Senha"
                            value={this.state.form["senha"]} 
                            onChange={(e) => { this.handleChange("senha", e) }} 
                            required="" 
                            title="Senha"
                           />
                          
                          <a class="esqueci-senha" href="#">Esqueci a senha</a>
                          <Link to="/usuaria/index">
                            <button type="button" onClick={this.entrar} class="testar button2 botao-login-form">
                              <a class="close-modal botao-login-form" id="link-cadastro" data-dismiss="modal" data-toggle="modal">Entrar</a>
                            </button>
                          </Link>
                          <a class="close-modal button3 botao-login-form" id="link-cadastro" data-dismiss="modal" data-toggle="modal" href="#cadastro">Cadastrar </a>
                        </form>
                        <Route path="/usuaria/index" component={Usuaria} />
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