import {createStore} from "redux";
import {gameReducer} from "./reducers/game-reducer/game-reducer";

const store = createStore(
    gameReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

export default store;
