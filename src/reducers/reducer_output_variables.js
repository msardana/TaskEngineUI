import {FETCH_OUTPUT_VARIABLES_REQUEST, FETCH_OUTPUT_VARIABLES_RECIEVED} from '../actions/index';

export default function(state = {}, action) {
	console.log('input variables reducer called');
  switch (action.type) {
    case FETCH_OUTPUT_VARIABLES_REQUEST:
	console.log('request output variables reducer called');

      return state;
    case FETCH_OUTPUT_VARIABLES_RECIEVED:
	console.log(' output variables  receieved reducer called');
      return action.payload;
    default:
      return state
  }
}