import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
  
  
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
                    <img src="" alt=""/>
                </header>
                <section></section>
            </main>
        );
    }
}

export default Usuaria;