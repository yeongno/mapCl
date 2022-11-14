import Cookies from "universal-cookie";
const cookies = new Cookies();

export function login(id, password) {
  if (id === "admin" && password === "123123") {
    return {
      access_token: "jx84e3kjew1njej3al2q9w",
      refresh_token: "g2rjfd7452bjfgn;a&*(jkehj",
    };
  } else {
    console.log(id, password);
    return undefined;
  }
}
export function logout() {
  console.log("localStorage set logout!");
  window.localStorage.setItem("logout", Date.now());
  cookies.remove("refresh_token");
}

export function setRefreshTokenToCookie(refresh_token) {
  cookies.set("refresh_token", refresh_token, { sameSite: "strict" });
}

export function getAccessToken() {
  const refresh_token = cookies.get("refresh_token");
  if (refresh_token) {
    return {
      access_token: "dj7H8Jduyf,bw&%dkhdkszd",
      refresh_token: "djKJ/dio2jk*4KJHydhen,wlLlmddjk",
    };
  } else {
    return undefined;
  }
}
