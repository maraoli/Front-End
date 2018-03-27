import React, { Component } from 'react';
import {Switch} from 'react-router-dom';

// import './App.css';
import './HTMLgetProgramadora/css/agency.css';

import Home from "./components/pages/Home";
// import Vagas from "./components/vagas_1tela";

// IMPORT PAGES
import Usuaria from './components/pages/usuaria/index';
import Vagas from "./components/vagas";
import VagasEducacao from "./components/vagas_educacao";
import Cursos from "./components/cursos";
import ExibirPerfil from "./components/pages/usuaria/exibir_perfil";  
import EditarPerfil from "./components/pages/usuaria/editar_perfil"; 

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {

    const logo = require('./HTMLgetProgramadora/img/logos/logo1.png');
    
    return (
      <div>
        {/*IF:*/}
        {/*carrega auto*/}
        {/*{!usuario.logado && <Home /> }*/}
        {usuario.logado && usuario.tipo === usuaria && <Usuaria />}
        {usuario.logado && usuario.tipo === empresa && <Empresa />}

        <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/usuaria/index" component={Usuaria}/>
              <Route exact path="/vagas" component={Vagas}/>
              <Route exact path="/vagas_educacao" component={VagasEducacao}/>
              <Route exact path="/cursos" component={Cursos}/>
              {/*usuaria*/}
              <Route path="/exibir-perfil" component={ExibirPerfil}/>
              <Route path="/editar-perfil" component={EditarPerfil}/>
              
              {/*<Route path="/usuaria/editar_perfil" component={EditarPerfil}/>*/}
              {/*path é o q aparece na url*/}
              {/*url / path é tracinho e componente/ CamelCase*/}
              {/*f2 renomeia*/}
              {/*AGRUPA ROTA SWITCH mas so pode ter 1 switch*/}
        </Switch>
      </div>
    );
  }
}

export default App;
