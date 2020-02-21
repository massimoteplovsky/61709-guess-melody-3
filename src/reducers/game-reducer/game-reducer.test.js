import {gameReducer} from "./game-reducer.js";
import {incrementStep, incrementMistake} from "../../actions/action-creators/game-action-creators";
import {
  INCREMENT_MISTAKES,
  INCREMENT_STEP
} from '../../actions/types/game-action-types';

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


it(`Reducer without additional parameters should return initial state`, () => {
  expect(gameReducer(void 0, {})).toEqual({
    step: -1,
    mistakes: 0,
    maxMistakes: 3,
    questions,
  });
});

it(`Reducer should increment current step by a given value`, () => {
  expect(gameReducer({
    step: -1,
    mistakes: 0,
    questions,
  }, {
    type: INCREMENT_STEP,
    payload: 1,
  })).toEqual({
    step: 0,
    mistakes: 0,
    questions,
  });

  expect(gameReducer({
    step: -1,
    mistakes: 0,
    questions,
  }, {
    type: INCREMENT_STEP,
    payload: 0,
  })).toEqual({
    step: -1,
    mistakes: 0,
    questions,
  });
});

it(`Reducer should increment number of mistakes by a given value`, () => {
  expect(gameReducer({
    step: -1,
    mistakes: 0,
    questions,
  }, {
    type: INCREMENT_MISTAKES,
    payload: 1,
  })).toEqual({
    step: -1,
    mistakes: 1,
    questions,
  });

  expect(gameReducer({
    step: -1,
    mistakes: 0,
    questions,
  }, {
    type: INCREMENT_MISTAKES,
    payload: 0,
  })).toEqual({
    step: -1,
    mistakes: 0,
    questions,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for incrementing step returns correct action`, () => {
    expect(incrementStep()).toEqual({
      type: INCREMENT_STEP,
      payload: 1,
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload if answer for artist is correct`, () => {
    expect(incrementMistake({
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``,
      },
      answers: [
        {
          artist: `correct`,
          picture: ``,
        }, {
          artist: `incorrect`,
          picture: ``,
        }, {
          artist: `incorrect-2`,
          picture: ``,
        },
      ]
    }, {
      artist: `correct`,
      picture: ``,
    })).toEqual({
      type: INCREMENT_MISTAKES,
      payload: 0,
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload if answer for artist is incorrect`, () => {
    expect(incrementMistake({
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``,
      },
      answers: [
        {
          artist: `correct`,
          picture: ``,
        }, {
          artist: `incorrect`,
          picture: ``,
        }, {
          artist: `incorrect-2`,
          picture: ``,
        },
      ]
    }, {
      artist: `incorrect`,
      picture: ``,
    })).toEqual({
      type: INCREMENT_MISTAKES,
      payload: 1,
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload if answer for genre is correct`, () => {
    expect(incrementMistake({
      type: `genre`,
      genre: `jazz`,
      answers: [
        {
          genre: `rock`,
          src: ``,
        }, {
          genre: `jazz`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        },
      ]
    }, [false, true, false, false])).toEqual({
      type: INCREMENT_MISTAKES,
      payload: 0,
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload if answer for genre is incorrect`, () => {
    expect(incrementMistake({
      type: `genre`,
      genre: `jazz`,
      answers: [
        {
          genre: `blues`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        },
      ]
    }, [true, true, true, true])).toEqual({
      type: INCREMENT_MISTAKES,
      payload: 1,
    });
  });
});
