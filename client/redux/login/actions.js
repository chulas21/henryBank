import { LOGIN } from "../actions_types";
import axios from "axios";
import {hoost} from "../varible_host";
import { useSelector } from "react-redux";

export const login = (state) => (dispatch) => {
  axios
    .post(`http://${hoost}:8080/users/auth/login`, state)
    .then((data) => {
      dispatch({ type: LOGIN, payload: data.data });
    });
};
