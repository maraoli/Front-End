import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Fragment
} from 'react-router-dom'

//IMG
import UserImg from './user.jpg';

//IMPORT
import '../../login/index';

//IMPORT TEMP
class UsuariaMinMacth extends Component {
    constructor(props){
        super(props);
    }
    render() {
            return(
                <React.Fragment> 
                    {/* <div className=" container match-usuaria-min portfolio-link" id="redefine-container-match" data-toggle="modal" href="#login">
                        <div className="row">
                            <img src={UserImg} className="col-lg-2 col-xs-3 col-sm-3 "/>
                            <p className="col-lg-5 col-xs-5 col-sm-6 col-md-6">{this.props.nome}</p>
                            <p className="col-lg-push-2 col-lg-3 col-xs-1 col-sm-2 ">{this.props.pontuacao}</p>
                        </div>
                    </div> */}
                    <div className="box-user">
                        <img src={UserImg} className=""/>
                        <p className="">{this.props.nome}</p>
                        <p className="">{this.props.pontuacao}</p>
                    </div>
                </React.Fragment> 
            );
    }
}

export default UsuariaMinMacth;