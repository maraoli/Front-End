
import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class ForumTopicCreate extends Component {
    constructor(props){
        super(props);
        this.state = { value_title: '', value_content:'' };
	this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange1 = (event) => this.setState( {value_title: event.target.value} );
    onChange2 = (event) => this.setState( {value_content: event.target.value} );

    handleSubmit(event) {
	event.preventDefault();
	this.props.update(this.state); 
        
    }


    render() {
        return(
	<div class='col-12'>
		<form onSubmit={this.handleSubmit}>
  		<div class="form-group">
    			<label for="exampleFormControlInput1">Título do tópico</label>
			<input type="text" value={this.state.value_title} onChange={this.onChange1} class="form-control" aria-label="Default" />
  		</div>
  		<div class="form-group">
    				<label for="">Conteúdo do texto</label>
    				<textarea class="form-control" value={this.state.value_content} onChange={this.onChange2} rows="10"></textarea>
		</div>
		<button type="submit" class="btn btn-primary mb-2">Publicar</button>
		<script>console.log("teste")</script>
		</form>
	</div>
	);
    }
}

export default ForumTopicCreate;



