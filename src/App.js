import React, { Component } from 'react';

// import './App.css';
import './HTMLgetProgramadora/css/agency.css';

import Home from "./components/pages/Home";

//VERSAO2
//import Vagas_principal from "./components/vagas_principal";
//import Vagas_profissao from "./components/vagas_profissao";

// import Vagas from "./components/vagas_1tela";
import Vagas from "./components/vagas";

import Vagas_educacao from "./components/vagas_educacao";
import Cursos from "./components/cursos";

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {

    const logo = require('./HTMLgetProgramadora/img/logos/logo1.png');
    
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          {/*<Route exact path="/vagas_1tela" component={Vagas_1tela}/>*/}
          <Route exact path="/vagas" component={Vagas}/>
          <Route exact path="/vagas_educacao" component={Vagas_educacao}/>
          <Route exact path="/cursos" component={Cursos}/>
        </div>

      </Router>
    );
  }
}

export default App;
