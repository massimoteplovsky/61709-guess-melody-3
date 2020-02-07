import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const mistakeQuantity = 3;
const welcomeButtonHandler = () => {};

it(`<App /> component renders correctly`, () => {
  const tree = renderer
    .create(<App
      mistakeQuantity={mistakeQuantity}
      welcomeButtonHandler={welcomeButtonHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
