import React from 'react';
import { connect } from 'react-redux';


const CommentList = (props) => {
	const list = props.comments.map((comment) => <li key={comment}> {comment}</li>)	
	console.log(list, 'list');
	return (
		<ul className="comment-list">
			{list}
		</ul>
	)
}

const mapStateToProps = (state) => {
	return {
		comments: state.comments //we have not yet created a reducer that holds this piece of state 
	}
}

export default connect(mapStateToProps)(CommentList);