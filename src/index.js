import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {Provider} from "react-redux";
import store from './store';

import {loadQuestions} from "./actions/action-creators/data/data";
import {checkAuth} from "./actions/action-creators/user/user";

store.dispatch(loadQuestions());
store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
