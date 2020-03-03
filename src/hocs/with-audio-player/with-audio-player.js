import React, {PureComponent} from 'react';
import AudioPlayer from "../../components/audio-player/audio-player.jsx";
import withAudio from "../with-audio/with-audio.js";

const WrappedAudioPlayer = withAudio(AudioPlayer);

const withActivePlayer = (Component) => {

  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayerId: 0,
      };
    }

    render() {
      const {activePlayerId} = this.state;

      return <Component
        {...this.props}
        renderPlayer={(src, id) => {
          return (
            <WrappedAudioPlayer
              src={src}
              isPlaying={id === activePlayerId}
              onPlayButtonClick={() => this.setState({
                activePlayerId: activePlayerId === id ? -1 : id
              })}
            />
          );
        }}
      />;
    }
  }

  WithActivePlayer.propTypes = {};

  return WithActivePlayer;
};

export default withActivePlayer;
