import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';

// we just imported everything and saved them as the variable actions now we can pass the entire actions objects

class CommentBox extends Component {
	constructor (props) {
		super(props); 

		this.state = { comment: '' }; 
	}

	handleChange(event) {
		this.setState({
			comment: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.saveComment(this.state.comment);
		this.setState({
			comment: '',
		})
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
				<textarea value={this.state.comment} onChange={this.handleChange.bind(this)} />
				<button action="submit"> Submit Comment</button>
			</form>
		)
	}
}

// all we care about is the action creators here
export default connect(null, actions)(CommentBox);