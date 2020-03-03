import {combineReducers} from "redux";
import {data} from "./data/data.js";
import {game} from "./game/game.js";
import {user} from "./user/user.js";

export default combineReducers({
  data,
  game,
  user
});
