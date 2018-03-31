import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

//IMG
import UserImg from './user.jpg';

class UsuariaMinMacth extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }
    render() {
        return(
            <div className="match-usuaria-min">
                <img src={UserImg} alt="" />
                <p>dados[i].nome</p>
                <p>dados[i].pontucacao</p>
            </div>
        );
    }
}

export default UsuariaMinMacht;