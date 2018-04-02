import React, { Component } from 'react';

//CSS
import '../../../HTMLgetProgramadora/css/usuaria.css';

//IMG
import UserImg from './user.jpg';
import Coroa from './coroa1.png';

//FILES TEMP
import Navbar from './Navbar';

class Index extends React.Component {
    render() {
        return (
            <div>
                {/*TEMP*/}
                <Navbar/>
                <main className="conteudo-principal">
                    <figure className="">
                        <img class="imgGetPoints" src={UserImg} alt="" />
                        <img class="coroaGetPoints" src={Coroa} alt="" />
                    </figure>
                    <p className="texto-pontuacao">Você acumulou até o momento <span className="pontuacao">110</span> getPoints!</p>
                    <a class=" button2 botao-mais-pontos" href="#">Aumente sua pontuação</a>
                </main>
            </div>
        );
    }
}

export default Index;