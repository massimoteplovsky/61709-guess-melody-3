import {createStore, applyMiddleware} from "redux";
import rootReducer from "./reducers/reducer";
import thunk from "redux-thunk";
import {createAPI} from "./api/api.js";
import {composeWithDevTools} from 'redux-devtools-extension';
import {requireAuthorization} from './actions/action-creators/user/user';
import {NO_AUTH} from './const';

const onUnauthorized = () => {
  store.dispatch(requireAuthorization(NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

export default store;
