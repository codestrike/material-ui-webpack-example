import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';

const logger = createLogger();

const OPEN = 'OPEN';
const CLOSE = 'CLOSE';
const TOGGLE = 'TOGGLE';

// reducers
export const dialogReducer = (state = false, action) => {
	switch(action.type) {
	case OPEN:
		return true;
	case CLOSE:
		return false;
	case TOGGLE:
		return !state;
	default:
		return state;
	}
}

// action creators
export const toggleDialog = () => ({
	type: TOGGLE
})


export let store = createStore(dialogReducer, applyMiddleware(logger));
