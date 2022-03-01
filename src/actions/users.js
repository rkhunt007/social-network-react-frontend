import axios from "./axios";
import { FETCH_USERS } from "./types";

export const fetchUsers = formData => async dispatch => {
    try {

        const res = await axios.get('api/users', formData);
        dispatch({
            type: FETCH_USERS,
            payload: res.data
        })

    } catch (error) {

    }

}
