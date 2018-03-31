import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

//IMG
import UserImg from './user.jpg';
import UsuariaMinMatch from './usuaria-min-match';

//IMPORT TEMP
import dados from '../dados';

class Matchs extends Component {
    constructor(props){
        super(props);

        this.state = {
            dados:[] = dados
        }
    }

    render() {
        return this.state.dados.map(function (usuaria) {
            return(
                <div>
                    <UsuariaMinMatch 
                        img= {usuaria.img}
                        nome= {usuaria.nome}
                        pontuacao= {usuaria.pontuacao}
                    />
                </div>
            );
        })
        // return(
        //     <div>
        //         dados.map(function(usuaria){
        //             <UsuariaMinMatch 
        //                 img= {usuaria.img}
        //                 nome= {usuaria.nome}
        //                 pontuacao= {usuaria.pontuacao}
        //             />
        //         })
        //     </div>
        // );
    }
}

export default Matchs;