import React, { Component } from 'react';

import ForumTopic from './forum_topic';
import ForumTopicCreate from './forum_topic_create';

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

//FILES TEMP
import Navbar from '../usuaria/Navbar';

class Forum extends Component {
	constructor(props) {
		super(props);

		this.values = [
			{
				titulo: "Aprender react",
				conteudo: "Meninas, estou amando o curso de react que estou fazendo! Quem quiser algumas dicas, estou a disposição para ajudar :)",
				link: "forum/1"
			},
			{
				titulo: "Aprender react",
				conteudo: "Meninas, estou amando o curso de react que estou fazendo! Quem quiser algumas dicas, estou a disposição para ajudar :)",
				link: "forum/2"
			},
			{
				titulo: "Aprender react",
				conteudo: "Meninas, estou amando o curso de react que estou fazendo! Quem quiser algumas dicas, estou a disposição para ajudar :)",
				link: "forum/3"
			}
		]


		this.state = {
			forum: this.values
		}

		this.novoPost = this.novoPost.bind(this);
	}


	listarForum() {
		return this.state.forum.map(function (item_forum) {
			return (

				<div>
					<ForumTopic subject={item_forum.titulo} content={item_forum.conteudo} link={item_forum.link} />
					<br />
				</div>
			);
		})
	};


	novoPost(post) {
		//console.log('TITULO: ',post.value_title);
		//console.log('CONTEUDO: ',post.value_content);
		this.values.unshift({ titulo: post.value_title, conteudo: post.value_content, link: "forum/3" })
		this.setState({ forum: this.values })
	}


	render() {
        return(
            <React.Fragment>
                {/* TEMP */}
                <Navbar/>
			<div class='container'>
				<h1>Fórum</h1>
				{/* <a type="button" class="btn btn-primary btn-lg btn-block" href="/forum/create">add tópico (opção 1)</a> */}
				<button type="button" class="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#exampleModal">Adicionar comentário</button>
				<br />
				{this.listarForum()}

				<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">Novo tópico</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<ForumTopicCreate update={this.novoPost} />
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			</React.Fragment>
		);
	}
}

export default Forum;



