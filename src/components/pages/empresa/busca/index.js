import React, { Component } from 'react';
import * as axios from "axios";
import config from "../../../util/config"

import {
    BrowserRouter as Router,
    Route,
    Link,
    Fragment
} from 'react-router-dom'

//IMPORT FILES
import Filtro from "./filtro";
import { filtrarUsuarias } from "./filtro";

//FILES TEMP
import Navbar from '../navbar';
import filtrosSelecionados from './filtrosSelecionados';
import dados from '../dados';


class Busca extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filtrosSelecionados: filtrosSelecionados,
            // dados: []
            dados: dados
        }
    }

    componentDidMount(){
        var self = this;
        axios.get(config.baseApiPath + 'User', this.state.form)
        .then(function (response) {
            console.log(response.data);
            self.setState({
                dados: response.data
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

    filtrarUsuarias() {
        var usuarias = this.state.dados;
        var filtrosSelecionados = this.state.filtrosSelecionados;
        console.log(usuarias);
        var usuariasFiltradas = usuarias;

        for (var filtro in filtrosSelecionados) {
            var valoresFiltro = filtrosSelecionados[filtro];
            for(var i = 0; i < valoresFiltro.length; i++){
                var valor = valoresFiltro[i];
                usuariasFiltradas = usuariasFiltradas.filter(
                    usuaria => {
                        return usuaria[filtro] != undefined && usuaria[filtro].indexOf(valor) > -1
                    }
                );              
                console.log(`Filtro: ${filtrosSelecionados[filtro]}: usuarias: ${usuariasFiltradas}`)  
            }
        }

        

            // filtrosSelecionados.map(
            //         (tipo)=>{
            //             filtrosSelecionados.tipo.map(
            //                 (interador)=>{
            //                     us => us.tipo[].indexOf(filtrosSelecionados.tipo[interador]) > -1
            //                 }
            //             )
            //         }
            //     )
        //chama set state para o novo filtro
        console.log(usuariasFiltradas)
        this.setState({
            dados: usuariasFiltradas
        });
        console.log(this.state.dados);
    }

    render() {
        var self = this;
        return (
            <React.Fragment>
                {/* TEMP */}
                <Navbar />
                <div className="caixa-de-filtro">
                    <div className="selecao-linguagens">
                        <p>Linguagens</p>
                        <input type="checkbox"/>
                        <label for="">Java</label>
                        <input type="checkbox"/>
                        <label for="">PHP</label>
                        <input type="checkbox"/>
                        <label for="">C</label>
                        <input type="checkbox"/>
                        <label for="">C#</label>
                    </div>
                    <div className="selecao-academica">
                        <p>Academico</p>
                        <input type="checkbox"/>
                        <label for="">Ensino Médio</label>
                        <input type="checkbox"/>
                        <label for="">Superior</label>
                    </div>
                    <button className="button2" onClick={() => this.filtrarUsuarias()}>Filtrar</button>
                </div>
                <div className="container">
                    <div className=" nav-match-usuaria-min">
                        <p className="arrumar"></p>
                        <p className="">Nome:</p>
                        <p className="">Pontuação:</p>
                    </div>
                </div>
                {this.state.carregando ? null : <Filtro filtrosSelecionados={this.state.filtrosSelecionados} usuarias={this.state.dados} />}
            </React.Fragment>
        );
    }
}

export default Busca;