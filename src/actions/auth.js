import axios from "./axios";
import { LOGIN, LOGIN_ERR, GET_USER, GET_USER_ERR, LOGOUT, REGISTER, REGISTER_ERR } from "./types";
import history from "../components/history";

export const login = formData => async dispatch => {
    try {

        const res = await axios.post('api/auth/login', formData);
        localStorage.setItem('token', res.data.token);
        dispatch({
            type: LOGIN
        })
        dispatch(authUser());

    } catch (error) {
        
        dispatch({
            type: LOGIN_ERR
        })

    }

}

export const register = formData => async dispatch => {
    try {

        const res = await axios.post('api/users/register', formData);
        localStorage.setItem('token', res.data.token);
        dispatch({
            type: REGISTER
        })
        dispatch(authUser());

    } catch (error) {
        
        dispatch({
            type: REGISTER_ERR
        })

    }

}

export const authUser = () => async dispatch => {
    try {

        const res = await axios.get('api/auth');
        dispatch({
            type: GET_USER,
            payload: res.data
        })
        history.push("/dashboard");

    } catch (error) {
        
        dispatch({
            type: GET_USER_ERR
        })

    }

}

export const logout = () => dispatch => {

    dispatch({
        type: LOGOUT
    })
    history.push("/");

}
