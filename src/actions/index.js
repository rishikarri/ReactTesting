import { SAVE_COMMENT } from './types.js';

// export function saveComment() {
// 	return {

// 	}
// }

export const saveComment = (payload) => {
	return {
		type: SAVE_COMMENT,
		payload,
	}
}