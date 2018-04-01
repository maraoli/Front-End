import React, { Component } from 'react';

// IMPORT FILES
import Card from '../../components/card';

// IMPORT IMAGENS
import CardDefault from './imgCard.jpg';

class ParaEmpresas extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        const card_1 = {titulo:"hhh", texto: "jhjkjhkj", img:CardDefault}
        return (
            <section id="para-empresas">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="section-heading text-uppercase">Para Empresas</h2>
                        <h3 class="section-subheading text-muted">Invista na diversidade e inclusão de gênero. A getprogramadora( ); conecta as principais empresas com diversos talentos e alcança comunidades de mulheres da área tech.</h3>
                    </div>
                    </div>
                    <div class="row">
                        <Card 
                            titulo="Buscar Candidatas" 
                            texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit." 
                            img={CardDefault}
                        />
                        <Card 
                            titulo="Match" 
                            texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit." 
                            img={CardDefault}
                        />
                        <Card 
                            titulo="Filtro salvos" 
                            texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit." 
                            img={CardDefault}
                        />
                        <Card 
                            titulo="Candidatas salvas" 
                            texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit." 
                            img={CardDefault}
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default ParaEmpresas;