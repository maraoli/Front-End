
import React, { Component } from 'react';
import './cursos.css';

//FILES TEMP
import Navbar from '../usuaria/Navbar';

class Cursos extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cursos: [
				{
					nome_do_curso: "Python",
					url_da_imagem: "https://ucarecdn.com/33d4c181-abaa-449e-bc7f-081b11a188cc/",
					descricao_do_curso: ""
				},
				{
					nome_do_curso: "Php",
					url_da_imagem: "",
					descricao_do_curso: ""
				},
				{
					nome_do_curso: "Java",
					url_da_imagem: "",
					descricao_do_curso: ""
				},
				{
					nome_do_curso: "Javascript",
					url_da_imagem: "",
					descricao_do_curso: ""
				}
			]
		}

	}

	listarCursos() {
		return this.state.cursos.map(function (curso) {
			return (
				<div className="cursoitem-cursoitem-3 col-xs-3">
					<div className="cursoitem-0">
						<img src={curso.url_da_imagem} className="cursoitem-image-4" alt="" />
					</div>
					<div className="cursoitem-1">
						<div className="cursoitem-cursonome-9">{curso.nome_do_curso}</div>
					</div>
					<div className="cursoitem-2">
						<div className="cursoitem-cursodesc-4">
							{curso.descricao_do_curso}
						</div>
					</div>
					<div className="cursoitem-3">
						<div className="cursoitem-cursolink-0"><a href="#a">Veja mais</a></div>
					</div>
				</div>
			);
		})
	}

	render() {
		return (
			<div>
                {/*TEMP*/}
                <Navbar/>
				<div className="container">
					<div className="row">
						{this.listarCursos()}
					</div>
				</div>
			</div>
		);
	}

}

export default Cursos;
