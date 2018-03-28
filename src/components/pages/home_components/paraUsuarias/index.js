import React, { Component } from 'react';

// IMPORT FILES
import Card from '../../components/card';

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
                  <Card 
                      titulo="Meu Perfil" 
                      texto="Acompanhe sua evolução" 
                      img={CardDefault}
                  />
                  <Card 
                      titulo="Forum" 
                      texto="Faça parte de uma rede de conexão e sororidade" 
                      img={CardDefault}
                  />
                  <Card 
                      titulo="Cursos" 
                      texto="Potencialize as suas chances!!!" 
                      img={CardDefault}
                  />
                  <Card 
                      titulo="Currículo" 
                      texto="O que fazer para se destacar no mercado de trabalho de tech?" 
                      img={CardDefault}
                  />
                </div>
              </div>
            </section>
          );
    }
}

export default ParaUsuarias;