import {
  SAVE_REGISTER_DATA,
  ACCOUNT_LOGIN,
  EMPTY_REDUX,
  UPDATE_USER_PIC,
} from "../actions_types.js";
const initialState = {
  registerData: [],
  registerData2: [],
  uri:
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_REGISTER_DATA:
      return {
        // registerData: [...state.registerData, action.payload],
        registerData: action.payload,
      };

    case ACCOUNT_LOGIN:
      return {
        registerData: [...state.registerData, action.payload],
        // registerData: action.payload,
      };

    case EMPTY_REDUX:
      return {
        registerData: [],
      };

    case UPDATE_USER_PIC:
      return {
        uri: action.payload,
      };

    default:
      return state;
  }
}
