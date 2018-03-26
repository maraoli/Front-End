import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from '../../../registerServiceWorker';

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

//CSS
import '../../../HTMLgetProgramadora/css/usuaria.css';

//IMG
import UserImg from './user.jpg';
  
class Usuaria extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }
    render() {
        return(
            <main>
                <header class="cabecalho-user">
                    <h1><p>Voce esta em:</p>Perfil</h1>
                    <nav class="nav-user-home">
                        <ul>
                            <li>Editar Perfil</li>
                            <li>+Vagas</li>
                            <li>Forum</li>
                            <li>Cursos</li>
                        </ul>
                    </nav>
                    <span>
                        <img src={UserImg} alt=""/>
                    </span>   
                </header>
                <section></section>
            </main>
        );
    }
}

export default Usuaria;

ReactDOM.render(<Usuaria/>, document.getElementById('root'));
// React.renderComponent(<Usuaria/>, document.getElementById('root'));
// registerServiceWorker();