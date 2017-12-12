import { renderComponent, expect } from '../test_helper.js';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
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