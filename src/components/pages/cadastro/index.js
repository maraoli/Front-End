import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// FILES
import CadastroUsuaria from './CadastroUsuaria';
import CadastroEmpresa from './CadastroEmpresa';

class Cadastro extends Component {
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
                            <div class="selection-cadastro">
                            <h1>Quero me cadastrar</h1>
                            <h2>Eu sou:</h2>
                            <input name="check-tipo-de-cadastro" class="login-customer-personality " type="radio" onClick={() => { this.changeForm(true) }} />
                            <p>Usuaria</p>
                            <input name="check-tipo-de-cadastro" class="login-customer-personality " type="radio" onClick={() => { this.changeForm(false) }} />
                            <p>Empresa</p>
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
        );
    }
}

export default Cadastro;