import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//CSS
import './HTMLgetProgramadora/css/agency.css';

// FILES
import Home from "./components/pages/Home";
import VagasEducacao from "./components/vagas_educacao";
import Cursos from "./components/pages/cursos/index";

import NavbarUsuaria from './components/pages/usuaria/Navbar';
import IndexUsuaria from './components/pages/usuaria/index';
import Curriculo from "./components/pages/usuaria/curriculo";
import ExibirPerfil from "./components/pages/usuaria/exibir_perfil";  
import EditarPerfil from "./components/pages/usuaria/editar_perfil"; 

import NavbarEmpresa from './components/pages/empresa/navbar';
import IndexEmpresa from './components/pages/empresa/index';
// import Vagas from "./components/vagas_1tela";

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {

      }
      this.usuario = JSON.parse(localStorage.getItem('usuario'))
  }

  render() {

    const logo = require('./HTMLgetProgramadora/img/logos/logo1.png');
    
    return (
      <div>
        {/*IF:*/}
        {/*carrega auto*/}
        {this.usuario && this.usuario.logado && this.usuario.tipo === 'usuaria' && <NavbarUsuaria />}
        {this.usuario && this.usuario.logado && this.usuario.tipo === 'empresa' && <NavbarEmpresa />}

        <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/vagas_educacao" component={VagasEducacao}/>
              <Route exact path="/cursos" component={Cursos}/>
              {/*usuaria*/}
              <Route path="/usuaria" component={IndexUsuaria}/>
              <Route exact path="/curriculo" component={Curriculo}/>
              <Route path="/exibir-perfil" component={ExibirPerfil}/>
              <Route path="/editar-perfil" component={EditarPerfil}/>
              {/*empresa*/}
              <Route path="/empresa" component={IndexEmpresa}/>
        </Switch>
      </div>
    );
  }
}

export default App;
