import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Fragment
} from 'react-router-dom'

//FILES TEMP
import dados from '../empresa/dados';

class ExibirPerfilDado extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="exibir-box">
                    <h1 className="exibir-titulo" >{this.props.titulo}</h1>
                    <p className="exibir-cadastro" >{this.props.dado}</p>
                </div>
            </React.Fragment>
        );
    }
}

export default ExibirPerfilDado;