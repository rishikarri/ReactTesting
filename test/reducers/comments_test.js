// test each possible action that the reducer cares about 

// whenever we test a reducer, we are going to test a default case 

// we pass in an action that we know the reudcer is not supposed to respond to

// the second thing we test is we are going to test each possible action that the reducer cares about  

// if we have an action with 20 different action types 

import { expect } from '../test_helper.js'; 
import commentReducer from '../../src/reducers/comments.js';
import { SAVE_COMMENT } from '../../src/actions/types.js';

describe('Comments Reducer', () => {
	it('handles action with unknown type', () => {
		// if we pass in no action, we should expect ot just get an array 
		// if this thing gets called with mysterious arguments
		// i'm expecting whatever the reducer returns to be an array 

		expect(commentReducer(undefined, {})).to.eql([]);
		// expect(commentReducer()).to.be.instanceOf(Array);
	})

	it ('handles action of type SAVE_COMMENT', () => {
		const action = {
			type: SAVE_COMMENT, 
			payload: 'new comment'
		}

		expect(commentReducer([], action)).to.eql(['new comment']);
	})
})