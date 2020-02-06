import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";

const App = ({mistakeQuantity}) => {
  return (
    <WelcomeScreen mistakeQuantity={mistakeQuantity}/>
  );
};

App.propTypes = {
  mistakeQuantity: PropTypes.number.isRequired
};

export default App;
