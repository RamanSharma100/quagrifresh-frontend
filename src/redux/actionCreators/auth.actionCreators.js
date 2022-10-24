import * as types from "../actionTypes/auth.actionTypes";
import axios from "axios";
import { toast } from "react-toastify";

// actions
export const login = (payload) => ({
  type: types.LOGIN,
  payload,
});

export const logout = () => ({
  type: types.LOGOUT,
});

// action creators
const endPoint = import.meta.env.QUAGRI_ENDPOINT_URL;
export const registerUser = (data, setSuccess) => (dispatch) => {
  axios
    .post(`${endPoint}/api/auth/register`, data)
    .then((res) => {
      toast.success(msg);
      setSuccess(true);
    })
    .catch((err) => {
      toast.error(err.response.data.msg);
    });
};

export const loginUser = (data, setSuccess) => (dispatch) => {
  axios
    .post(`${endPoint}/api/auth/login`, data)
    .then((res) => {
      dispatch(login({ user: res.data.user, token: res.data.token }));
      // set token to local storage
      localStorage.setItem("quagri_tkn", JSON.stringify(res.data.token));
      toast.success(res.data.msg);
      setSuccess(true);
    })
    .catch((err) => {
      toast.error(err.response.data.msg);
    });
};
