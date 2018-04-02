import React, { Component } from 'react';

// antigo About
class QuemSomos extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <section id="services">
                <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                    <h2 class="section-heading text-uppercase">Quem Somos</h2>
                    <h3 class="section-subheading text-muted">Tudo começou através do curso Code[XP] do Senai-SP em um hackathon em que nos conhecemos e tivemos como desafio o Tema Empoderamento Feminino na área da Tecnologia proposto pela Microsoft. Logo percebemos que
                        as dificuldades que envolvem este tema são abrangentes, fato pelo qual tivemos que focar em uma dor específica
                        para conseguir atender a proposta dentro do breve tempo em que teríamos para o desenvolvimento e entrega do produto.</h3>
                    <h3 class="section-subheading text-muted">O getProgramadora(); é uma plataforma online para as mulheres na tecnologia. Atualmente, focamos em agregar valor e
                        empoderar as mulheres através de 3 pilares: Social, profissional e fomentando a qualificação da mulher dentro
                        em tech</h3>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-users fa-stack-1x fa-inverse" aria-hidden="true"></i>
                        </span>
                    <h4 class="service-heading">Social</h4>
                    <p class="text-muted">Conectar mulheres em uma comunidade de apoio mútuo. </p>
                    </div>
                    <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-suitcase fa-stack-1x fa-inverse" aria-hidden="true"></i>
                        </span>
                    <h4 class="service-heading">Profissional</h4>
                    <p class="text-muted">Se destacar entre as empresas que necessitam contratar e reter mais mulheres de tecnologias. </p>
                    </div>
                    <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-graduation-cap fa-stack-1x fa-inverse" aria-hidden="true"></i>
                        </span>
                    <h4 class="service-heading">Qualificação</h4>
                    <p class="text-muted">Acesso a cursos que estimulem o aprendizado exponencial.</p>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default QuemSomos;