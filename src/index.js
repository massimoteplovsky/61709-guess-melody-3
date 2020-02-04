import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";

const MISTAKES_COUNT = 3;

ReactDOM.render(
    <App mistakes={MISTAKES_COUNT}/>,
    document.querySelector(`#root`)
);
