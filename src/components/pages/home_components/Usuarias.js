import React, { Component } from 'react';

// antigo About
class Usuarias extends Component {
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
                      <h4>LoremTOP</h4>
                      <p className="text-muted servicos_descricao">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <a className="portfolio-link" data-toggle="modal" href="#para-usuariasModal1">
                      <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                          <i className="fa fa-plus fa-3x"></i>
                        </div>
                      </div>
                      <img className="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="">
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
                      <img className="img-fluid" src="img/portfolio/02-thumbnail.jpg" alt="">
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
                      <img className="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="">
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
                      <img className="img-fluid" src="img/portfolio/02-thumbnail.jpg" alt="">
                    </a>
                    
                  </div>
                </div>
              </div>
            </section>
// ************************** DELETAR ABAIXO: 
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">About</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="timeline">
                                <li>
                                    <div className="timeline-image">
                                        <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt="" />
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>2009-2011</h4>
                                            <h4 className="subheading">Our Humble Beginnings</h4>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-inverted">
                                    <div className="timeline-image">
                                        <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt="" />
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>March 2011</h4>
                                            <h4 className="subheading">An Agency is Born</h4>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="timeline-image">
                                        <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt="" />
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>December 2012</h4>
                                            <h4 className="subheading">Transition to Full Service</h4>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-inverted">
                                    <div className="timeline-image">
                                        <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt="" />
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>July 2014</h4>
                                            <h4 className="subheading">Phase Two Expansion</h4>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-inverted">
                                    <div className="timeline-image">
                                        <h4>Be Part
                        <br />Of Our
                        <br />Story!</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Usuarias;