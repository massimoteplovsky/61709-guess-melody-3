import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {App} from "./app.jsx";
const mockStore = configureStore([]);
const AVATAR_URL = `https://api.adorable.io/avatars/128`;
const questions = [
  {
    type: `genre`,
    genre: `metal`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/43/FSsongmetal2-MP3-LAME3.99.5-93.7kbps.oga`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/43/FSsongmetal2-MP3-LAME3.99.5-93.7kbps.oga`,
      genre: `folk`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/43/FSsongmetal2-MP3-LAME3.99.5-93.7kbps.oga`,
      genre: `mdm`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/43/FSsongmetal2-MP3-LAME3.99.5-93.7kbps.oga`,
      genre: `metal`,
    }],
  },
  {
    type: `artist`,
    song: {
      artist: `Metallica`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/43/FSsongmetal2-MP3-LAME3.99.5-93.7kbps.oga`,
    },
    answers: [{
      picture: `${AVATAR_URL}/A`,
      artist: `Anthrax`,
    }, {
      picture: `${AVATAR_URL}/AB`,
      artist: `Megadeth`,
    }, {
      picture: `${AVATAR_URL}/AC`,
      artist: `Metallica`,
    }],
  },
  {
    type: `genre`,
    genre: `metal`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/43/FSsongmetal2-MP3-LAME3.99.5-93.7kbps.oga`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/43/FSsongmetal2-MP3-LAME3.99.5-93.7kbps.oga`,
      genre: `folk`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/43/FSsongmetal2-MP3-LAME3.99.5-93.7kbps.oga`,
      genre: `mdm`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/43/FSsongmetal2-MP3-LAME3.99.5-93.7kbps.oga`,
      genre: `metal`,
    }],
  },
  {
    type: `artist`,
    song: {
      artist: `Metallica`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/43/FSsongmetal2-MP3-LAME3.99.5-93.7kbps.oga`,
    },
    answers: [{
      picture: `${AVATAR_URL}/A`,
      artist: `Anthrax`,
    }, {
      picture: `${AVATAR_URL}/AB`,
      artist: `Megadeth`,
    }, {
      picture: `${AVATAR_URL}/AC`,
      artist: `Metallica`,
    }],
  }
];

describe(`Render App`, () => {
  it(`Render WelcomeScreen`, () => {
    const store = mockStore({
      mistakes: 0,
    });
    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              maxMistakes={3}
              questions={questions}
              onUserAnswer={() => {}}
              onWelcomeButtonClick={() => {}}
              step={-1}
            />
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Render GenreQuestionScreen`, () => {
    const store = mockStore({
      mistakes: 3,
    });
    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              maxMistakes={3}
              questions={questions}
              onUserAnswer={() => {}}
              onWelcomeButtonClick={() => {}}
              step={0}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          }).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render ArtistQuestionScreen`, () => {
    const store = mockStore({
      mistakes: 3,
    });
    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              maxMistakes={3}
              questions={questions}
              onUserAnswer={() => {}}
              onWelcomeButtonClick={() => {}}
              step={1}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
