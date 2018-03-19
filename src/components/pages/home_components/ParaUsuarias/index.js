import React, { Component } from 'react';

// IMPORT IMAGENS
import CardDefault from './imgCard.jpg';

// antigo About
class ParaUsuarias extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            //<!-- antigo #portfolio -->
            <section className="bg-light" id="para-usuarias">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Para Usuárias</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet, 
                      tincidunt elementum tristique massa, donec urna lectus. Tempor in metus,
                       ut turpis volutpat, cras leo. Et ut nam metus ipsum integer, lacus tincidunt
                        sit, auctor lacus ac sit, non augue curabitur ridiculus ante praesent, 
                        suspendisse est a aliquid recusandae ullamcorper molestie. Sem dignissim 
                        dignissim magna. Pretium ac, convallis in interdum quisque.</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-6 portfolio-item">
                    <div className="portfolio-caption">
                      <h4>Meu Perfil</h4>
                      <p class="text-muted servicos_descricao">Acompanhe sua evolução</p>
                    </div>
                    <a className="portfolio-link" data-toggle="modal" href="#para-usuariasModal1">
                      <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                          <i className="fa fa-plus fa-3x"></i>
                        </div>
                      </div>
                      <img className="img-fluid" src={CardDefault} alt="" />
                    </a>
                  </div>
                  <div className="col-md-6 col-sm-6 portfolio-item">
                    <div className="portfolio-caption">
                      <h4>LoremTOP</h4>
                      <p className="text-muted servicos_descricao">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <a className="portfolio-link" data-toggle="modal" href="#para-usuariasModal2">
                      <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                          <i className="fa fa-plus fa-3x"></i>
                        </div>
                      </div>
                      <img className="img-fluid" src={CardDefault} alt="" />
                    </a>
                    
                  </div>
                  <div className="col-md-6 col-sm-6 portfolio-item">
                    <div className="portfolio-caption">
                      <h4>LoremTOP</h4>
                      <p className="text-muted servicos_descricao">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <a className="portfolio-link" data-toggle="modal" href="#para-usuariasModal1">
                      <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                          <i className="fa fa-plus fa-3x"></i>
                        </div>
                      </div>
                      <img className="img-fluid" src={CardDefault} alt="" />
                    </a>
                  </div>
                  <div className="col-md-6 col-sm-6 portfolio-item">
                    <div className="portfolio-caption">
                      <h4>LoremTOP</h4>
                      <p className="text-muted servicos_descricao">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <a className="portfolio-link" data-toggle="modal" href="#para-usuariasModal2">
                      <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                          <i className="fa fa-plus fa-3x"></i>
                        </div>
                      </div>
                      <img className="img-fluid" src={CardDefault} alt="" />
                    </a>
                    
                  </div>
                </div>
              </div>
            </section>
          );
    }
}

export default ParaUsuarias;