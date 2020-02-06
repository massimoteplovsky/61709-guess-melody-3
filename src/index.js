import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const MISTAKE_QUANTITY = 3;

ReactDOM.render(
    <App mistakeQuantity={MISTAKE_QUANTITY}/>,
    document.querySelector(`#root`)
);
