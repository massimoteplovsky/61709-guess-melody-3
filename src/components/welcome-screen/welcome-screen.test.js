import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

const welcomeButtonHandler = () => {};

it(`<WelcomeScreen /> component renders correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      errorsCount={3}
      onWelcomeButtonClick={welcomeButtonHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
