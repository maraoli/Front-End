import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div class="col-md-6 col-sm-6 portfolio-item">
                <div class="portfolio-caption">
                <h4>{this.props.titulo}</h4>
                <p class="text-muted servicos_descricao">{this.props.texto}</p>
                </div>
                <a class="portfolio-link" data-toggle="modal" href="#para-usuariasModal1">
                    <img class="img-fluid" src={this.props.img}  alt="" />
                </a>
            </div>
        );
    }
}
export default Card;