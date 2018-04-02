import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Fragment
} from 'react-router-dom'

//FILES TEMP
import Navbar from '../navbar';
import dados from '../dados';

class Busca extends Component {
    constructor(props){
        super(props);

        this.state = {
            dados:[] = dados,

            filtroUsuarias:[
                dados[1],
                dados[0],
            ],

            filtros: {
                linguagens: [
                    {
                        nome: "java",
                        selected: false
                    }
                ],
                graduacao: [
                    {
                        nome: "superior",
                        selected: false
                    }
                ]
            }
        }
    }    

    render() {
        return(
            <React.Fragment>
                {/* TEMP */}
                <Navbar/>
                {
                    this.state.dados.filter(function (filtroUsuarias) {
                        return(
                            <div className="container">
                                {/* <p class="login-botao portfolio-link" data-toggle="modal" href="#login">Login</p> */}
                                <div className="match-usuaria-min row portfolio-link" data-toggle="modal" href="#login">
                                    <img src={filtroUsuarias.img} className="col-lg-2"/>
                                    <p className="col-lg-5 ">{filtroUsuarias.nome}</p>
                                    <p className="col-lg-push-2 col-lg-3">{filtroUsuarias.pontuacao}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </React.Fragment> 
        );
    }
}

export default Busca;