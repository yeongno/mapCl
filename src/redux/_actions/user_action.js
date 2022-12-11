import axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOGOUT_USER } from "./types";
import { USER_SERVER } from "../../config/ServerConfig";
import { GET_MYUSERINFO } from "../../config/tempClientConfig";
import Axios from "../../axios/Axios";
export function loginUser(dataToSubmit) {
  const request = axios
    .post("user/login", dataToSubmit)
    .then((response) => {
      if (response?.data.data.accessToken) {
        Axios.defaults.headers.common[
          "jwt_access_token"
        ] = `${response.data.data.accessToken}`;
        localStorage.setItem("token", response.data.data.accessToken);
        return response.data.data;
      }
    })
    .catch((error) => {
      alert(`${error.response.data.message}`);
    });

  return {
    type: LOGIN_USER,
    payload: request,
  };
}
export function registerUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/register`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function auth() {
  const isAuth = false;
  const expireToken = false;

  const request = Axios.get("/user")
    .then((response) => response.data)
    .catch((error) => {
      alert(`${error.response.data.message}`);
      return {
        type: AUTH_USER,
        expireToken: true,
      };
    });

  return {
    type: AUTH_USER,
    payload: request,
    isAuth,
    expireToken,
  };
}

//나의 유저 정보 일단 jwt로 값을 못가져오기에 임의로 설정
export function tmpLogin() {
  const request = axios.get(GET_MYUSERINFO).then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function logout() {
  const request = axios
    .get(`${USER_SERVER}/logout`)
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}
