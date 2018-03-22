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
                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet, 
                        tincidunt elementum tristique massa, donec urna lectus. Tempor in metus,
                        ut turpis volutpat, cras leo. Et ut nam metus ipsum integer, lacus tincidunt
                            sit, auctor lacus ac sit, non augue curabitur ridiculus ante praesent, 
                            suspendisse est a aliquid recusandae ullamcorper molestie. Sem dignissim 
                            dignissim magna. Pretium ac, convallis in interdum quisque.</h3>
                    </div>
                    </div>
                    <div class="row">
                        <Card 
                            titulo="LoremTOP" 
                            texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit." 
                            img={CardDefault}
                        />
                        <Card 
                            titulo="LoremTOP" 
                            texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit." 
                            img={CardDefault}
                        />
                        <Card 
                            titulo="LoremTOP" 
                            texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit." 
                            img={CardDefault}
                        />
                        <Card 
                            titulo="LoremTOP" 
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