
import React, { Component } from 'react';
import './cursos.css';

class Cursos extends Component {
    constructor(props) {
      super(props);

   }

    render() {
         return (
     		<div className="cursoitem-cursoitem-3">
      			<div className="cursoitem-0">
			           <img src={this.props.url_da_imagem} className="cursoitem-image-4" alt=""  />
			      </div>
			       <div className="cursoitem-1">
			            <div className="cursoitem-cursonome-9">{ this.props.nome_do_curso }</div>
			       </div>
			       <div className="cursoitem-2">
			            <div className="cursoitem-cursodesc-4">
				             {this.props.descricao_do_curso}
			            </div>
			       </div>
			       <div className="cursoitem-3">
			            <div className="cursoitem-cursolink-0"><a href="#a">Veja mais</a></div>
			       </div>
  		  </div>);
    }

}

export default Cursos;
