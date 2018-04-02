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
import Cursos from "./components/pages/cursos/index";

import NavbarUsuaria from './components/pages/usuaria/Navbar';
import IndexUsuaria from './components/pages/usuaria/index';
import Curriculo from "./components/pages/usuaria/curriculo/index";
import CurriculoProfissional from "./components/pages/usuaria/curriculo/profissional";
import CurriculoAcademico from "./components/pages/usuaria/curriculo/academico";
import ExibirPerfilUsuaria from "./components/pages/usuaria/exibir_perfil";  
import EditarPerfilUsuaria from "./components/pages/usuaria/editar_perfil"; 

import NavbarEmpresa from './components/pages/empresa/navbar';
import IndexEmpresa from './components/pages/empresa/index';
import ExibirPerfilEmpresa from "./components/pages/empresa/exibir_perfil";  
import EditarPerfilEmpresa from "./components/pages/empresa/editar_perfil"; 
import Matchs from "./components/pages/empresa/matchs/index";
import UsuariaMinMatch from "./components/pages/empresa/matchs/usuaria-min-match"; 
import Busca from "./components/pages/empresa/busca/index"; 
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
              <Route exact path="/cursos" component={Cursos}/>
              {/*usuaria*/}
              <Route path="/usuaria" component={IndexUsuaria}/>
              <Route exact path="/curriculo" component={Curriculo}/>
              <Route exact path="/profissional" component={CurriculoProfissional}/>
              <Route exact path="/academico" component={CurriculoAcademico}/>
              <Route path="/exibir-perfil-usuaria" component={ExibirPerfilUsuaria}/>
              <Route path="/editar-perfil-usuaria" component={EditarPerfilUsuaria}/>
              {/*empresa*/}
              <Route path="/empresa" component={IndexEmpresa}/>
              <Route path="/exibir-perfil-empresa" component={ExibirPerfilEmpresa}/>
              <Route path="/editar-perfil-empresa" component={EditarPerfilEmpresa}/>
              <Route path="/matchs" component={Matchs}/>
              <Route path="/matchs-user-min" component={UsuariaMinMatch}/>
              <Route path="/busca" component={Busca}/>
        </Switch>
      </div>
    );
  }
}

export default App;
