import axios from "./axios";
import { GET_PROFILE, UPDATE_PROFILE_IMAGE } from "./types";

export const getCurrentProfile = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/api/profile/me");
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    } catch (err) {
      console.log("::getCurrentProfile", err);
    }
  };
};

export const updateProfileImg = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/profile/image", formData);
    dispatch({
      type: UPDATE_PROFILE_IMAGE,
      payload: res.data,
    });
  } catch (err) {
    console.log("::updateProfileImg", err);
  }
};
