
import React, { Component } from 'react';
import './cursos.css';
// IMPORT IMAGENS
import CardDefault from './imgCard.jpg';
import ImgCursoReact from './react.jpg';
import ImgCursoHTML from './html.jpg';
import ImgCursoLogica from './logica.jpg';
import ImgCursoJS from './js.jpg';

//FILES TEMP
import Navbar from '../usuaria/Navbar';

class Cursos extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cursos: [
				{
					nome_do_curso: "HTML5 & CSS3",
					url_da_imagem: ImgCursoHTML,
					descricao_do_curso: "Crie sites do zero com HTML5 & CSS3",
					requisitos_do_curso: "Requisitos: Nenhum conhecimento requerido",
					url_do_curso: "https://www.udemy.com/curso-html-basico/"
				},
				{
					nome_do_curso: "Iniciando com Javascript",
					url_da_imagem: ImgCursoJS,
					descricao_do_curso: "Os principais conceitos da linguagem colocados em prática para você dar os primeiros passos no JS",
					requisitos_do_curso: "Requisitos: Editor de códigos como o Atom ou Sublime",
					url_do_curso: "https://www.udemy.com/iniciando-com-javascript/"
				},
				{
					nome_do_curso: "Iniciando com React",
					url_da_imagem: ImgCursoReact,
					descricao_do_curso: "Crie aplicações com React a biblioteca desenvolvida pelo Facebook ",
					requisitos_do_curso: "Requisitos: Conhecimento intermediário de Javascript",
					url_do_curso: "https://www.udemy.com/iniciando-com-react/"
				},
				{
					nome_do_curso: "Curso completo de Lógica de Programação e Algoritmos",
					url_da_imagem: ImgCursoLogica,
					descricao_do_curso: "Domine os fundamentos da programação de performance, aprenda a programar do ZERO!",
					requisitos_do_curso: "Requisitos: Nenhum conhecimento requerido",
					url_do_curso: "https://www.udemy.com/curso-de-logica-de-programacao-e-algoritmos/"
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
						<div className="cursoitem-cursonome-4">{curso.nome_do_curso}</div>
					</div>
					<div className="cursoitem-2">
						<div className="cursoitem-cursodesc-4">{curso.descricao_do_curso}</div>
					</div>
					<div className="cursoitem-3">
						<div className="cursoitem-cursoreq-4">{curso.requisitos_do_curso}</div>
					</div>
					<div className="cursoitem-4">
						<div className="cursoitem-cursolink-0"><a href="{curso.url_do_curso}">Veja mais</a></div>
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
				<div id="pai" className="container">
					<div className="row">
						{this.listarCursos()}
					</div>
				</div>
			</div>
		);
	}

}

export default Cursos;
