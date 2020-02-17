const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
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
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Anthrax`,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Megadeth`,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Metallica`,
    }],
  }
];
