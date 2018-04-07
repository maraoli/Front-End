import React, { Component } from 'react';
import * as axios from "axios";
import config from "../../../util/config"

import {
    BrowserRouter as Router,
    Route,
    Link,
    Fragment
} from 'react-router-dom'

//FILES
import ArrayUsersMin from './arrayUsersMin';

//FILES TEMP
import Navbar from '../navbar';
import dados from '../dados';

Array.prototype.contains = function(obj) {
    //prototype cria funções em metodos já existentes
    // "1" == 1 -> true;
    // "1" === 1 -> false;
}



class Matchs extends Component {
    constructor(props){
        super(props);

        this.state = {
            // dados: []
            dados: dados
        }
    }

    // contains(items, value){
    //     return items.indexOf(value) > -1;
    // }

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

    fitraUsuaria(){
        var usuarias = this.state.dados;
        var usuariasFiltradas = 
            usuarias.filter(
                u => u.linguagens.indexOf("php") > -1
                // u => contains(u.linguagens, "php")
            );
        
        console.log(usuariasFiltradas)
        this.setState({
            dados: usuariasFiltradas
        }, () => {
            console.log(this.state.dados)
        });

        console.log(this.state.dados)
    }

    render() {
        var self = this;
        return(
            <React.Fragment>
                {/* TEMP */}
                <Navbar/>
                <button onClick={ () => this.fitraUsuaria()  }>Filtrar</button>
                <div className="container">
                    <div className=" nav-match-usuaria-min row">
                        <p className="nav-item1-match-usuaria-min">Nome:</p>
                        <p className="nav-item2-match-usuaria-min">Pontuação:</p>
                    </div>
                </div>    
                { this.state.carregando ? null : <ArrayUsersMin dados={this.state.dados}/> }
            </React.Fragment> 
        );
    }
}

export default Matchs;