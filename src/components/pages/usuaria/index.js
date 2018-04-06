import React, { Component } from 'react';
import * as axios from "axios";
import config from "../../util/config"

import {
    BrowserRouter as Router,
    Route,
    Link,
    Fragment
} from 'react-router-dom'

//CSS
import '../../../HTMLgetProgramadora/css/usuaria.css';

//IMG
import UserImg from './user.jpg';
import Coroa from './coroa1.png';

//FILES TEMP
import Navbar from './Navbar';
import dados from "../empresa/dados";

class Index extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            // dados: []
            dados: dados
        }
    }

    componentDidMount(){
        var self = this;
        axios.get(config.baseApiPath + 'User', this.state.form)
        .then(function (response) {
            console.log(response.data);
            self.setState({
                dados: response.data
            })
            
        })
        .catch(function (error) {
            console.log(error);
            console.log(error.status);
            // console.log(response.statusText);
            // console.log(response.headers);
            // console.log(response.config);
        });
    }
    
    render() {
        return (
            <div>
                {/*TEMP*/}
                <Navbar/>
                <main className="conteudo-principal">
                    <figure className="">
                        <img class="imgGetPoints" src={UserImg} alt="" />
                        <img class="coroaGetPoints coroa-mobile" src={Coroa} alt="" />
                    </figure>
                    <p className="texto-pontuacao">Você acumulou até o momento <span className="pontuacao">110</span> getPoints!</p>
                    <Link to="/cursos">
                        <a class=" button2 botao-mais-pontos" href="#">Aumente sua pontuação</a>
                    </Link>
                </main>
            </div>
        );
    }
}

export default Index;