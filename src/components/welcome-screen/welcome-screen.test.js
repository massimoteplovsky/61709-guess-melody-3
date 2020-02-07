import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

const mistakeQuantity = 3;
const welcomeButtonHandler = () => {};

it(`<WelcomeScreen /> component renders correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      mistakeQuantity={mistakeQuantity}
      onWelcomeButtonClick={welcomeButtonHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
