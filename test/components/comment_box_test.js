import { renderComponent, expect } from '../test_helper.js';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {

	// a function that is going to run before any of our it statements
	// in total this function is going to get called three times 
	beforeEach(() => {
		const component = renderComponent(CommentBox);
	});
	it('has the correct class', () => {
		const component = renderComponent(CommentBox); 
		expect (component).to.have.class('comment-box');
	})
	it('has a text area', () => {
		const component = renderComponent(CommentBox);
		// we expect that the component should exist
		expect(component).to.exist;
		expect(component.find('textarea')).to.exist;		
		
	})

	it('has a button', () => {
		// create an instance of CommentBox
		const component = renderComponent(CommentBox);

		expect(component.find('button')).to.exist; 
	})	
})