import { logout } from "../../auth/auth";
import { DELETE_TOKEN, SET_TOKEN } from "./types";

export function setToken(token, result) {
  return {
    type: SET_TOKEN,
    token,
    result,
  };
}

export function deleteToken() {
  logout();
  return {
    type: DELETE_TOKEN,
    token: null,
    result: false,
  };
}
