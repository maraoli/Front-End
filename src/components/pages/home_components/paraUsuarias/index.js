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
                    <h3 className="section-subheading text-muted">Juntas, podemos mudar o mundo com mulheres trabalhadoras e empoderadas.</h3>
                  </div>
                </div>
                <div className="row">
                  <Card 
                      titulo="Meu Perfil" 
                      texto="Acompanhe sua evolução" 
                      img={CardDefault}
                  />
                  <Card 
                      titulo="Fórum" 
                      texto="Faça parte de uma rede de conexão e sororidade" 
                      img={CardDefault}
                  />
                  <Card 
                      titulo="Cursos" 
                      texto="Potencialize as suas chances!" 
                      img={CardDefault}
                  />
                  <Card 
                      titulo="Currículo" 
                      texto="O que fazer para se destacar no mercado de trabalho no mundo da tecnologia" 
                      img={CardDefault}
                  />
                </div>
              </div>
            </section>
          );
    }
}

export default ParaUsuarias;