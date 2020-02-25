import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player';

Enzyme.configure({adapter: new Adapter()});

// jest.spyOn(window.HTMLMediaElement.prototype, `play`)
//   .mockImplementation(() => {});

// jest.spyOn(window.HTMLMediaElement.prototype, `pause`)
//   .mockImplementation(() => {});

const onPlayButtonClick = jest.fn();
it(`AudioPlayer changed state after click`, () => {

  const player = shallow(
      <AudioPlayer
        isPlaying={false}
        isLoading={true}
        onPlayButtonClick={onPlayButtonClick}
        src={``}
      >
        <audio />
      </AudioPlayer>);

  const btn = player.find(`.track__button`);

  btn.simulate(`click`);

  expect(onPlayButtonClick).toHaveBeenCalledTimes(1);
});
