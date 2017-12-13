import { expect } from '../test_helper.js';
import { SAVE_COMMENT } from '../../src/actions/types.js';
import { saveComment } from '../../src/actions/';

// we are not rendering any components so we don't need render component here 

describe('actions', () => {
	describe('saveComment', () => {
		it('has the correct type', () => {
			const action = saveComment(); 
			expect(action.type).to.equal(SAVE_COMMENT);
		})
		it ('has the correct payload', () => {
			// we call payload that returns an action adn we expect that the payload of this action is equal to the new comment we pass it 
			const action = saveComment('new comment');
			expect (action.payload).to.equal('new comment');
		})
	})
})
