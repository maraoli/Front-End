import React, { Component } from 'react';

//CSS
import '../../../HTMLgetProgramadora/css/empresa.css';
import '../../../HTMLgetProgramadora/css/agency.css';

//FILES TEMP
import Navbar from './navbar';
 
class Empresa extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }
    render() {
        return(
            <div>
                {/*TEMP*/}
                <Navbar/>
            </div>
        );
    }
}

export default Empresa;