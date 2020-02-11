import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import questions from "./mocks/questions.js";

const MISTAKE_QUANTITY = 3;

ReactDOM.render(
    <App
      mistakeQuantity={MISTAKE_QUANTITY}
      questions={questions}
    />,
    document.querySelector(`#root`)
);
