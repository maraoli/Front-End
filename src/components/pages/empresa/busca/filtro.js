import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Fragment
} from 'react-router-dom'

//FILES
import UsuariaMinMatch from '../matchs/usuaria-min-match';

//FILES TEMP
import filtrosSelecionados from './filtrosSelecionados';

class Filtro extends Component {
    constructor(props){
        super(props);
        console.log(props)
    }

    // filtrarUsuarias(){
    //     var usuarias = this.state.dados;
    //     var usuariasFiltradas = 
    //         usuarias.filter(
    //             this.props.filtrosSelecionados.map(
    //                 (tipo)=>{
    //                     filtrosSelecionados.tipo.map(
    //                         (interador)=>{
    //                             u => u.tipo.indexOf(filtrosSelecionados.tipo[interador]) > -1
    //                         }
    //                     )
    //                 }
    //             )
    //         );
    //     //chama set state para o novo filtro
    //     console.log(usuariasFiltradas)
    //     this.setState({
    //         dados: usuariasFiltradas
    //     });
    //     console.log(this.state.dados);
    // }

    render() {
        var self = this;
        return this.props.usuarias.map(function (usuaria, index) {
            //map passa o indice da array
            return(
                <div>
                    <UsuariaMinMatch 
                        key={index}
                        img= {usuaria.img}
                        nome= {usuaria.name +" "+usuaria.lastName}
                        pontuacao= {usuaria.points}
                    />
                </div>
            );
        })
    }
}

export default Filtro;