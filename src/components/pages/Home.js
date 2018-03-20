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

        {/* <!-- Footer --> */}
        <footer className="bkg-footer-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <span className="copyright">Copyright &copy; Senai Code XP 2018</span>
              </div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-inline quicklinks">
                  <li className="list-inline-item">
                    <a className="item-footer" href="#">(11)4000-0000</a>
                  </li>
                  <li className="list-inline-item">
                    <a className="item-footer" href="#">get@mail.com</a>
                  </li>
                  <li className="list-inline-item">
                    <a className="item-footer" href="#">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        {/*MODAIS*/}
        <Login />
        <Cadastro />
        
      </div>
    );
  }
}

export default Home;
