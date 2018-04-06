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
                <h1>{this.props.titulo}</h1>
                <p>{this.props.dado}</p>
            </React.Fragment>
        );
    }
}

export default ExibirPerfilDado;