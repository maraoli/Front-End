import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//CSS
import '../../HTMLgetProgramadora/css/agency.css';

// FILES
import Navbar from './home_components/Navbar';
import Header from './home_components/Header';
import Login from './login/index';
import Cadastro from './cadastro/index';
import QuemSomos from './home_components/QuemSomos';
import ParaUsuarias from './home_components/paraUsuarias/index';
import ParaEmpresas from './home_components/paraEmpresas/index';
import Footer from './components/footer';


class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
    }
  }
  
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <QuemSomos />
        <ParaUsuarias />
        <ParaEmpresas />
        <Footer />

        {/*MODAIS*/}
        <Login />
        <Cadastro />
      </div>
    );
  }
}

export default Home;
