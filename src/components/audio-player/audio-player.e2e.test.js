import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player';

Enzyme.configure({adapter: new Adapter()});

jest.spyOn(window.HTMLMediaElement.prototype, `play`)
  .mockImplementation(() => {});

jest.spyOn(window.HTMLMediaElement.prototype, `load`)
  .mockImplementation(() => {});

it(`AudioPlayer changed state after click`, () => {

  const player = mount(
      <AudioPlayer
        src={``}
        isPlaying={true}
        onPlayButtonClick={() => {}}
      />);

  expect(player.state(`isPlaying`)).toEqual(true);

  player.instance()._audioRef.current.onplay();
  expect(player.state(`isPlaying`)).toEqual(true);

  player.instance()._audioRef.current.onpause();
  expect(player.state(`isPlaying`)).toEqual(false);
});
