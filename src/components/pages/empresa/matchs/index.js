import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Fragment
} from 'react-router-dom'

//FILES
import ArrayUsersMin from './arrayUsersMin';

//FILES TEMP
import Navbar from '../navbar';

class Matchs extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <React.Fragment>
                {/* TEMP */}
                <Navbar/>
                <div className="container">
                    <div className=" nav-match-usuaria-min row">
                        <p className="col-lg-push-2 col-lg-5">Nome:</p>
                        <p className="col-lg-push-4 col-lg-3">Pontuação:</p>
                    </div>
                </div>    
                <ArrayUsersMin/>
            </React.Fragment> 
        );
    }
}

export default Matchs;