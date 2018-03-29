import React, { Component } from 'react';
import {Switch} from 'react-router-dom';

// import './App.css';
import './HTMLgetProgramadora/css/agency.css';

import Home from "./components/pages/Home";
// import Vagas from "./components/vagas_1tela";

// IMPORT PAGES
import UsuariaIndex from './components/pages/usuaria/index';
import NavbarUsuaria from './components/pages/usuaria/Navbar';
import PaginaUsuaria from './components/pages/usuaria';
import NavbarEmpresa from './components/pages/empresa/index';
import Curriculo from "./components/pages/usuaria/curriculo";
import VagasEducacao from "./components/vagas_educacao";
import Cursos from "./components/pages/cursos/index";
import ExibirPerfil from "./components/pages/usuaria/exibir_perfil";  
import EditarPerfil from "./components/pages/usuaria/editar_perfil"; 

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//JSON
// localStorage.setItem('usuario', JSON.stringify(response.data))

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
              <Route path="/usuaria/index" component={PaginaUsuaria}/>
              <Route exact path="/curriculo" component={Curriculo}/>
              <Route exact path="/vagas_educacao" component={VagasEducacao}/>
              <Route exact path="/cursos" component={Cursos}/>
              {/*usuaria*/}
              <Route path="/usuaria" component={UsuariaIndex}/>
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
