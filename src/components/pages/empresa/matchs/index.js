import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

//IMG
import UserImg from './user.jpg';
import UsuariaMinMatch from './usuaria-min-match';

class Matchs extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }

    dados.map(function(usuaria){
        return <UsuariaMinMatch />
    })

    render() {
        return(
            <div>
                
            </div>
        );
    }
}

export default Matchs;