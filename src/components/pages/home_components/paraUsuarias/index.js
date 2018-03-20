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
                      <h4>Forum</h4>
                      <p class="text-muted servicos_descricao">Faça parte de uma rede de conexão e sororidade</p>
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
                      <h4>Cursos</h4>
                      <p class="text-muted servicos_descricao">Potencialize as suas chances!!!</p>
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
                       <h4>+Vagas</h4>
                       <p class="text-muted servicos_descricao">O que fazer para se destacar no mercado de trabalho de tech?</p>
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