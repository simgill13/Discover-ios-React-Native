import {
 USER_DATA
} from '../actions/action';

const initialState = {
    name: '',
    email:'',   
}

export default (state = initialState, action) => {
	switch(action.type) {
	   	case USER_DATA:
			return Object.assign({}, state, {
				name: action.name,
				email: action.email
			});
	    default:
	        return state;
	}
}







