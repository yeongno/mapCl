import { combineReducers } from "redux";
import user from "./user_reducer";
import post from "./post_reducer";
import turn from "./turn_reducer";
import reply from "./reply_reducer";
import token from "./token_reducer";

const rootReducer = combineReducers({
  user,
  post,
  turn,
  reply,
  token,
});

export default rootReducer;
