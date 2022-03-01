import { FETCH_USERS } from '../actions/types';

const initialState = {
    users: [],
    loading: true
}

function usersReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_USERS:
            return {
                ...state,
                loading: false,
                users: action.payload
            };
        default:
            return state;
    }
}

export default usersReducer;