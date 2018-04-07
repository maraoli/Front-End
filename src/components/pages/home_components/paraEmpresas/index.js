import React, { Component } from 'react';

// IMPORT FILES
import Card from '../../components/card';

// IMPORT IMAGENS
import CardDefault from './imgCard.jpg';
// 
import ImgFiltros from './filtro.jpg';
import ImgMatch from './match.jpg';
import ImgCandidatos from './candidatos.jpg';
import ImgCandidatosSalvas from './candidatossalvas.jpg';

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
                        <h3 class="section-subheading text-muted">Invista na diversidade e inclusão de gênero. A getprogramadora( ); conecta as principais empresas com diversos talentos qualificados na área</h3>
                    </div>
                    </div>
                    <div class="row">
                        <Card 
                            titulo="Buscar Candidatas" 
                            texto="Procure por candidatas com o perfil que mais se encaixe com a cultura da empresa" 
                            img={ImgCandidatos}
                        />
                        <Card 
                            titulo="Match" 
                            texto="Receba recomendações de candidatas melhores ranqueadas de acordo com as necessidades solicitadas" 
                            img={ImgMatch}
                        />
                        <Card 
                            titulo="Filtros de seleção" 
                            texto="Selecione os perfis e tenha acesso instantâneo" 
                            img={ImgFiltros}
                        />
                        <Card 
                            titulo="Candidatas salvas" 
                            texto="Visualize através do mural de candidatas as que mais se destacaram para as empresas" 
                            img={ImgCandidatosSalvas}
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default ParaEmpresas;
