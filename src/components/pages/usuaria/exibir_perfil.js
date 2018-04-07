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
        axios.get(config.baseApiPath + 'User/a92e066e-4912-4b1c-4c23-08d59b455b5c', this.state.form)
        .then(function (response) {
            console.log(response.data[0]);
            self.setState({
                dado: response.data[0]
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
                        dado={this.state.dado.name + " " + this.state.dado.lastName}
                    />
                    <ExibirPerfilDado
                        titulo="Email:"
                        dado={this.state.dado.email}
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
            </React.Fragment>
        );
    }
}

export default ExibirPerfil;