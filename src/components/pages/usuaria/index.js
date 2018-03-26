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
import Coroa from './coroa1.png';
  
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
                    {/* <h1><p>Voce esta em:</p>Perfil</h1> */}
                    <a class="navbar-brand js-scroll-trigger" href="#page-top">getProgramadora( );</a>
                    <nav class="nav-user-home col-md-8">
                        <ul>
                            <li>Editar perfil</li>
                            <li>+Vagas</li>
                            <li>Forum</li>
                            <li>Cursos</li>
                        </ul>
                    </nav>
                    <span class="img-perfil-space">
                        <img src={UserImg} alt=""/>
                    </span>   
                </header>
                <main className="conteudo-principal">
                    <figure className="">
                        <img class="imgGetPoints" src={UserImg} alt=""/>
                        <img class="coroaGetPoints" src={Coroa} alt=""/>
                    </figure>
                    <p className="texto-pontuacao">Você acumulou até o momento <span className="pontuacao">110</span> getPoints!</p>
                    <a class=" button2 botao-mais-pontos" href="#">Aumente sua pontuação</a> 
                </main>
            </main>
        );
    }
}

export default Usuaria;

ReactDOM.render(<Usuaria/>, document.getElementById('root'));
// React.renderComponent(<Usuaria/>, document.getElementById('root'));
// registerServiceWorker();