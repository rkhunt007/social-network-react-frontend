import { GET_PROFILE, UPDATE_PROFILE_IMAGE } from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  loading: true,
};

function profilesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };

    case UPDATE_PROFILE_IMAGE:
      const profile = JSON.parse(JSON.stringify(state.profile));
      profile.user = action.payload;
      return { ...state, profile: profile };

    default:
      return { ...state };
  }
}

export default profilesReducer;
