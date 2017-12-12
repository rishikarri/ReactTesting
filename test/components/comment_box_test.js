import { renderComponent, expect } from '../test_helper.js';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
	let component; //declare a variable that i expect to change 
	// a function that is going to run before any of our it statements
	// in total this function is going to get called three times 
	beforeEach(() => {
		component = renderComponent(CommentBox);
	});

	it('has the correct class', () => {
		expect (component).to.have.class('comment-box');
	})
	it('has a text area', () => {
		// we expect that the component should exist
		expect(component).to.exist;
		expect(component.find('textarea')).to.exist;		
		
	})

	it('has a button', () => {
		// create an instance of CommentBox
		expect(component.find('button')).to.exist; 
	})

	// these two specs are really closely related - so we can nest another describe block in here

	describe('entering some text', () => {
		beforeEach(() => {
			//grabs the very particular text area, wheever the user types, simulate fake events in our component's html
			// we simulate what the new value is going to be with this new comment
			component.find('textarea').simulate('change', 'new comment');
		});
		it ('shows text in the text area ', () => {
			expect(component.find('textarea')).to.have.value('new comment');
		});

		it ('when submitted, clears the input', () => {
			//need to trigger behavior that causes comment box to clear out the input 
			component.simulate('submit');
			expect(component.find('textarea')).to.have.value('');
		});	
	})

	
})