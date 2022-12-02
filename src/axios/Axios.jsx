import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:3000", // 요청을 www.aa.com/user로 보낸다면, www.aa.com까지 기록
  headers: {
    jwt_access_token: localStorage.getItem("token"),
  },
});
export default Axios;
