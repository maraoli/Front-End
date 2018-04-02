import React, { Component } from 'react';

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
            dados: dados
        }
    }

    // contains(items, value){
    //     return items.indexOf(value) > -1;
    // }

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
                        <p className="col-lg-push-2 col-lg-5">Nome:</p>
                        <p className="col-lg-push-4 col-lg-3">Pontuação:</p>
                    </div>
                </div>    
                { this.state.carregando ? null : <ArrayUsersMin dados={this.state.dados}/> }
            </React.Fragment> 
        );
    }
}

export default Matchs;