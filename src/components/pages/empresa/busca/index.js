import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Fragment
} from 'react-router-dom'

//IMPORT FILES
import Filtro from "./filtro";  

//FILES TEMP
import Navbar from '../navbar';
import dados from '../dados';
import filtrosSelecionados from './filtrosSelecionados';

class Busca extends Component {
    constructor(props){
        super(props);

        this.state = {
            filtrosSelecionados:[] = filtrosSelecionados  
        }
    }    

    render() {
        return(
            <React.Fragment>
                {/* TEMP */}
                <Navbar/>
                <button onClick={ () => this.filtrarUsuarias()  }>Filtrar</button>
                <div className="container">
                    <div className=" nav-match-usuaria-min row">
                        <p className="col-lg-push-2 col-lg-5">Nome:</p>
                        <p className="col-lg-push-4 col-lg-3">Pontuação:</p>
                    </div>
                </div>
                { this.state.carregando ? null : <Filtro filtrosSelecionados={this.state.filtrosSelecionados}/> }
            </React.Fragment> 
        );
    }
}

export default Busca;