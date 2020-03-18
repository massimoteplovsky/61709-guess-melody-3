import {game} from "./game";
import {incrementStep, incrementMistake, resetGame, goToWelcome} from "../../actions/action-creators/game/game";
import {
  INCREMENT_MISTAKES,
  INCREMENT_STEP,
  RESET,
  GO_TO_WELCOME
} from '../../actions/types/game';


it(`Reducer without additional parameters should return initial state`, () => {
  expect(game(void 0, {})).toEqual({
    step: -1,
    mistakes: 0,
    maxMistakes: 3,
  });
});

it(`Reducer should increment current step by a given value`, () => {
  expect(game({
    step: -1,
    mistakes: 0,
  }, {
    type: INCREMENT_STEP,
    payload: 1,
  })).toEqual({
    step: 0,
    mistakes: 0,
  });

  expect(game({
    step: -1,
    mistakes: 0,
  }, {
    type: INCREMENT_STEP,
    payload: 0,
  })).toEqual({
    step: -1,
    mistakes: 0,
  });
});

it(`Reducer should increment number of mistakes by a given value`, () => {
  expect(game({
    step: -1,
    mistakes: 0,
  }, {
    type: INCREMENT_MISTAKES,
    payload: 1,
  })).toEqual({
    step: -1,
    mistakes: 1,
  });

  expect(game({
    step: -1,
    mistakes: 0,
  }, {
    type: INCREMENT_MISTAKES,
    payload: 0,
  })).toEqual({
    step: -1,
    mistakes: 0,
  });
});

it(`Reducer should return default`, () => {
  expect(game({
    step: 5,
    mistakes: 1,
  }, {
    type: RESET,
    payload: null,
  })).toEqual({
    step: 0,
    mistakes: 0,
    maxMistakes: 3,
  });

  expect(game({
    step: 0,
    mistakes: 0,
  }, {
    type: RESET,
    payload: null,
  })).toEqual({
    step: 0,
    mistakes: 0,
    maxMistakes: 3,
  });

  expect(game({
    step: -1,
    mistakes: 0,
  }, {
    type: RESET,
    payload: null,
  })).toEqual({
    step: 0,
    mistakes: 0,
    maxMistakes: 3,
  });
});

it(`Reducer should return step -1`, () => {
  expect(game({
    step: 5,
    mistakes: 1,
  }, {
    type: GO_TO_WELCOME,
    payload: null,
  })).toEqual({
    step: -1,
    mistakes: 0,
    maxMistakes: 3,
  });

  expect(game({
    step: 0,
    mistakes: 0,
  }, {
    type: GO_TO_WELCOME,
    payload: null,
  })).toEqual({
    step: -1,
    mistakes: 0,
    maxMistakes: 3,
  });

  expect(game({
    step: -1,
    mistakes: 0,
  }, {
    type: GO_TO_WELCOME,
    payload: null,
  })).toEqual({
    step: -1,
    mistakes: 0,
    maxMistakes: 3,
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

  it(`Action creator for reset game returns action with null payload`, () => {
    expect(resetGame())
      .toEqual({
        type: RESET,
        payload: null,
      });
  });

  it(`Action creator for go to welcome returns action with null payload`, () => {
    expect(goToWelcome())
      .toEqual({
        type: GO_TO_WELCOME,
        payload: null,
      });
  });
});
