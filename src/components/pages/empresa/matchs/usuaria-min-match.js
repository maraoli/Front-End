import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

//IMG
import UserImg from './user.jpg';

//IMPORT
import '../../login/index';

//IMPORT TEMP
import dados from '../dados1';

class UsuariaMinMacth extends Component {
    constructor(props){
        super(props);

        this.state = {
            dados:[] = dados
        }
    }
    render() {
        return this.state.dados.map(function (usuaria) {
            return(
                <div className="container">
{/* <p class="login-botao portfolio-link" data-toggle="modal" href="#login">Login</p> */}
                    <div className="match-usuaria-min row portfolio-link" data-toggle="modal" href="#login">
                        <img src={usuaria.img} className="col-lg-2"/>
                        <p className="col-lg-5 ">{usuaria.nome}</p>
                        <p className="col-lg-push-2 col-lg-3">{usuaria.pontuacao}</p>
                    </div>
                </div>
            );
        })
    }
}

export default UsuariaMinMacth;