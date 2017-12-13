import { renderComponent, expect } from '../test_helper.js';
import CommentList from '../../src/components/comment_list.js';

describe('CommentList', () => {
	let component; 

	beforeEach(() => {
		const props = {comments: ['New Comment', 'Other New Comment' ]}
		component = renderComponent(CommentList, null, props);

		//third argument to rendercomponent is the props that get passed into component
	});

	it ('shows an LI for each comment', () => {
		expect(component.find('li').length).to.equal(2); // given two comments, i expect to have 2 lis 	
	})

	it ('shows each comment that is provided', () => {
		expect(component).to.contain('New Comment');
		expect(component).to.contain('Other New Comment');
	})
})