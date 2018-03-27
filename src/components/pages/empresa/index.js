import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Switch} from 'react-router-dom';
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
  
//FILES
import Vagas from "../../vagas";
import Cursos from "../../cursos";
import ExibirPerfil from "./exibir_perfil";  
import EditarPerfil from "./editar_perfil";  

class Usuaria extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }
    render() {
        return(
            <Switch>
                <header class="cabecalho-user">
                    {/* <h1><p>Voce esta em:</p>Perfil</h1> */}
                    <a class="navbar-brand js-scroll-trigger" href="#page-top">getProgramadora( );</a>
                    <nav class="nav-user-home col-md-8">
                        <ul>
                            <li>Empresa</li>
                            {/*<li>+Vagas</li>
                            <li>Forum</li>
                            <li>Cursos</li>
                            <li className="">
                                <Link to="/vagas">
                                <p className="">Vagas</p>
                                </Link>
                            </li>
                            <li className="">
                                <Link to="/cursos">
                                <p className="">Cursos</p>
                                </Link>
                            </li>*/}
                        </ul>
                    </nav>
                    <span class="img-perfil-space">
                        <img src={UserImg} alt=""/>
                    </span>   
                </header>
                <Router>
                    <div>        
                        <main className="conteudo-principal">
                            <figure className="">
                                <img class="imgGetPoints" src={UserImg} alt=""/>
                                <img class="coroaGetPoints" src={Coroa} alt=""/>
                            </figure>
                            <p className="texto-pontuacao">Você acumulou até o momento <span className="pontuacao">110</span> getPoints!</p>
                            <a class=" button2 botao-mais-pontos" href="#">Aumente sua pontuação</a> 
                        </main>
                    </div>
                </Router>
                <Router>
                    <ExibirPerfil/>
                </Router>
                <Router>
                    <EditarPerfil/>
                </Router>
            </Switch> 
        );
    }
}

export default Usuaria;

// ReactDOM.render(<Usuaria/>, document.getElementById('root'));
// React.renderComponent(<Usuaria/>, document.getElementById('root'));
// registerServiceWorker();