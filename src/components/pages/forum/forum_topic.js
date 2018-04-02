import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class ForumTopic extends Component {
    constructor(props){
        super(props);
        this.state = {}
	console.log("forum forum forum forum");
	console.log(this.props.xxx);
    }

    render() {
        return(
        <div class="card">
  	    <h5 class="card-header">{this.props.subject}</h5>
  	    <div class="card-body">
    	        <h5 class="card-title">{this.props.content}</h5>
    	        <p class="card-text"></p>
    	        <a href={this.props.link} class="btn btn-primary">Participar</a>
  	    </div>
        </div>     
        );
    }
}

export default ForumTopic;



