import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

//IMG
import UserImg from './user.jpg';

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
                <div>
                    <div className="match-usuaria-min">
                        <img src={usuaria.img} className="col-md-2" />
                        <p className="col-md-5 ">{usuaria.nome}</p>
                        <p className="offset span={2}">{usuaria.pontuacao}</p>
                    </div>
                </div>
            );
        })
    }
}

export default UsuariaMinMacth;