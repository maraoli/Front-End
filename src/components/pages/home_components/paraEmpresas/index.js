import React, { Component } from 'react';

// IMPORT IMAGENS
import CardDefault from './imgCard.jpg';

class ParaEmpresas extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
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
                    <div class="col-md-6 col-sm-6 portfolio-item">
                        <div class="portfolio-caption">
                        <h4>LoremTOP</h4>
                        <p class="text-muted servicos_descricao">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <a class="portfolio-link" data-toggle="modal" href="#para-usuariasModal1">
                            <img class="img-fluid" src={CardDefault} alt="" />
                        </a>
                    </div>
                    <div class="col-md-6 col-sm-6 portfolio-item">
                        <div class="portfolio-caption">
                        <h4>LoremTOP</h4>
                        <p class="text-muted servicos_descricao">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <a class="portfolio-link" data-toggle="modal" href="#para-usuariasModal2">
                        <img class="img-fluid" src={CardDefault} alt="" />
                        </a>
                        
                    </div>
                    <div class="col-md-6 col-sm-6 portfolio-item">
                        <div class="portfolio-caption">
                        <h4>LoremTOP</h4>
                        <p class="text-muted servicos_descricao">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <a class="portfolio-link" data-toggle="modal" href="#para-usuariasModal1">
                        <img class="img-fluid" src={CardDefault} alt="" />
                        </a>
                    </div>
                    <div class="col-md-6 col-sm-6 portfolio-item">
                        <div class="portfolio-caption">
                        <h4>LoremTOP</h4>
                        <p class="text-muted servicos_descricao">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <a class="portfolio-link" data-toggle="modal" href="#para-usuariasModal2">
                            <img class="img-fluid" src={CardDefault} alt="" />
                        </a>
                        
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ParaEmpresas;