import { GET_USER, GET_USER_ERR, LOGIN, LOGIN_ERR, LOGOUT, REGISTER } from '../actions/types';

const initialState = {
    user: null,
    loggedIn: false,
    loading: true,
}

function authReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN:
        case REGISTER:
            return {...state, loggedIn: true, loading: false};

        case GET_USER:
            return {...state, user: action.payload, loggedIn: true, loading: false};

        case LOGIN_ERR:
        case GET_USER_ERR:
        case LOGOUT:
            localStorage.removeItem('token')
            return {...state, loggedIn: false, loading: false, user: null};


        default:
            return state;
    }
}

export default authReducer;