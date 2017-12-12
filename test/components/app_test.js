// purpose of this file is to test solely the component app 
// in this case, the only thing I care about is making sure that app shows React simple starter

import { renderComponent, expect }  from '../test_helper';
import App from '../../src/components/app';

// use describe to group together similar tests 
describe('App', () => {

	let component;

	beforeEach(() => {
		component = renderComponent(App); 

	})
	

	it ('shows a comment box', () => {
		// useful becuase it forms a linkage between two components

		// find is a jquery method that expects a css selector
		expect(component.find('.comment-box')).to.exist;
	})
})

// Use 'it' to test a single attribute of a target 
//string is just used for the developer on what the block is going to test


//use expect to make an assertion about a target 

// the purpose of writing all of these functions is that so we can safely throw errors that mocha can understand and provide us with feedback rather than throwing the whole browser out of whack