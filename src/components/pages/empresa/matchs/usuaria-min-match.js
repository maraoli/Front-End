import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

//IMG
import UserImg from './user.jpg';

//IMPORT TEMP
import dados from '../dados';

class UsuariaMinMacth extends Component {
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
                    <div className="match-usuaria-min">
                        <img src={usuaria.img}/>
                        <p>{usuaria.nome}</p>
                        <p>{usuaria.pontuacao}</p>
                    </div>
                </div>
            );
        })
        // return(
        //     <div className="match-usuaria-min">
        //         {/* {dados.map(function(usuaria){
        //             <img src={usuaria.img}/>
        //             "<p>"+{usuaria.nome}+"</p>"
        //             "<p>"+{usuaria.pontuacao}+"</p>"
        //         })} */}

        //         {/* {dados.map(function(usuaria){
        //             <img src={usuaria.img}/>
        //             <p>{usuaria.nome}</p>
        //             <p>{usuaria.pontuacao}</p>
        //         })} */}

        //         {/* {for(let i = 0; i<dados.length; i++){
        //             <img src={dados[i].img} alt="" />
        //             <p>dados[i].nome</p>
        //             <p>dados[i].pontucacao</p>
        //         }} */}
        //     </div>
        // );
    }
}

export default UsuariaMinMacth;