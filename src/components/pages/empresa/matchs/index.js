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
                <ArrayUsersMin/>
            </React.Fragment> 
        );
    }
}

export default Matchs;