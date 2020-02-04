import React from "react";
import WelcomeScreen from "./welcome-screen.jsx";

// eslint-disable-next-line react/prop-types
const App = ({mistakes}) => {
  return (
    <WelcomeScreen mistakes={mistakes}/>
  );
};

export default App;
