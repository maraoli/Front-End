import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Fragment
} from 'react-router-dom'

//IMG
import UserImg from './user.jpg';
import UsuariaMinMatch from './usuaria-min-match';

//IMPORT TEMP
import Navbar from '../navbar';

class ArrayUsersMin extends Component {
    constructor(props){
        super(props);
    }


    render() {
        // return(
        //     <React.Fragment>
        //         <Navbar/>
        //         dados.map(usuaria => <Fragment>
        //             <img src={usuaria.img} />
        //             <p>{usuaria.nome}</p>
        //             <p>{usuaria.pontuacao}</p>
        //         </Fragment>
        //     </React.Fragment> 
        // );
        return this.props.dados.map(function (usuaria, index) {
            return(
                <div>
                    <UsuariaMinMatch 
                        key={index}
                        img= {usuaria.img}
                        nome= {usuaria.nome}
                        pontuacao= {usuaria.pontuacao}
                    />
                </div>
            );
        })
        
    }
}

export default ArrayUsersMin;