import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as axios from "axios";
import config from "../../util/config"

import {
    BrowserRouter as Router,
    Route,
    Link,
    Fragment
} from 'react-router-dom'

//IMG
import UserImg from './user.jpg';

//FILES
import ExibirPerfilDado from './exibir_perfil_dado';

//FILES TEMP
import Navbar from './Navbar';
import dados from '../empresa/dados';

class ExibirPerfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dado: [],
            // dados: dados,
            // form: {
            //     name: "",
            //     lastname: "",
            //     password: "",
            //     email: ""
            // }
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        var self = this;
        axios.get(config.baseApiPath + 'User', this.state.form)
        .then(function (response) {
            console.log(response.data);
            self.setState({
                dado: response.data
            })
            
        })
        .catch(function (error) {
            console.log(error);
            console.log(error.status);
            // console.log(response.statusText);
            // console.log(response.headers);
            // console.log(response.config);
        });
    }

    submit() {
        axios.post('http://122855b5.ngrok.io/api/User', this.state.form)
        .then(function (response) {
            console.log(response);
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
        var self = this;
        return (
            <React.Fragment>
                {/*TEMP*/}
                <Navbar/>
                <form action="">
                    <ExibirPerfilDado
                        titulo="Nome:"
                        dado={this.state.dado.name +" " + this.state.dado.lastName}
                    />
                    <ExibirPerfilDado
                        titulo="Nome:"
                        dado={this.state.dado.name}
                    />
                    <ExibirPerfilDado
                        titulo="Nome:"
                        dado={this.state.dado.name}
                    />
                    <ExibirPerfilDado
                        titulo="Nome:"
                        dado={this.state.dado.name}
                    />
                </form>
                {/* <div>
                    <img class="imgGetPoints" src={UserImg} alt=""/>
                    <p>Adicionar uma foto</p>
                    <a class=" button2" href="#">Complementar perfil para vagas</a>
                    <form action="">
                        <h1>Nome</h1>
                        <p>{this.state.dados}</p>
                        <h1></h1>
                    </form>
                    <ul class="cadastro">
                        <div class="cadastro-item-content new-customer auth-form-box">
                            <form id="login-account-create" data-form="" data-form-ui-enabled="" data-form-excluded="[disabled]" data-login-validate="createLogin"
                                action="/customer/account/login/" method="post">
                                <div class="tipo-de-cadastro" name="tipo-de-cadastro"></div>

                                <div class="input-box">
                                    <label data-login-name="" for="RegistrationForm_first_name" class="required">Nome</label>
                                    <p>{this.state.dados.name}</p>
                                    <input value={this.state.form["name"]} onChange={(e) => { this.handleChange("name", e) }} data-form-group="cadastroPlat,natural" data-form-required="" data-social-first-name="" data-form-required-message="Campo obrigatório"
                                        name="RegistrationForm[first_name]" id="RegistrationForm_first_name" type="text" maxlength="50" />
                                </div>

                                <div class="input-box" data-login-person-type-container="" style={{ "display": "block" }}>
                                    <label for="RegistrationForm_last_name" class="required">Sobrenome <span class="required">*</span></label>
                                    <input value={this.state.lastname} onChange={(e) => { this.handleChange("lastname", e) }} data-form-group="natural" data-form-required="" data-social-last-name="" data-form-required-message="Campo obrigatório"
                                        name="RegistrationForm[last_name]" id="RegistrationForm_last_name" type="text" maxlength="50" />
                                </div>

                                <div class="input-box">
                                    <label for="RegistrationForm_email" class="required">E-mail <span class="required">*</span></label>
                                    <input value={this.state.email} onChange={(e) => { this.handleChange("email", e) }} data-form-group="natural,cadastroPlat" data-form-type="email" data-form-required="" data-form-required-message="Campo obrigatório"
                                        data-form-type-message="E-mail inválido. Verifique se digitou corretamente." name="RegistrationForm[email]"
                                        id="RegistrationForm_email" type="text" maxlength="40" />
                                </div>


                                <div>
                                    <label for="txtSenha">Senha</label>
                                    <input value={this.state.password} onChange={(e) => { this.handleChange("password", e) }} id="txtSenha" name="senha" type="password" required="" placeholder="Digite uma Senha" title="Senha" />
                                </div>
                                <div>
                                    <Link to="/editar-perfil-usuaria">
                                        <button type="button" onClick={() => { this.submit() }} class="testar button2 botao__cadastrar__cadastro">
                                            <a class="close-modal botao-login-form" id="link-cadastro" data-dismiss="modal" data-toggle="modal" href="#">Editar Perfil</a>
                                        </button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </ul>
                    <a class=" button2" href="#">Deletar conta</a>
                </div> */}
            </React.Fragment>
        );
    }
}

export default ExibirPerfil;