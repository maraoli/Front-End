import React, { Component} from 'react';
import Logo from './logo1.png';

// antigo About
class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        // const logo = require('/../../HTMLgetProgramadora/img/logos/logo1.png');
        return (
            <header class="masthead">
                <div class="overlay"></div>
                <div class="container header-space">
                <div class="intro-text">
                    <div class="intro-lead-in welcome">Bem vindo(a) ao:</div>
                     <img src={Logo} alt="" class=" logo-header intro-heading text-uppercase"/> 
                </div>
                </div>
            </header>
        );
    }
}

export default Header;