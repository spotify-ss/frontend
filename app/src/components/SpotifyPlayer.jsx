import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const SpotifyPlayerFrame = styled.iframe`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: black;
`;

const SpotifyPlayer = props => {
  return (
    <SpotifyPlayerFrame
      title="SpotifyPlayer"
      src={`https://open.spotify.com/embed/track/${props.trackId}`}
      width="300"
      height="80"
      frameBorder="0"
      allowtransparency="false"
      allow="encrypted-media"
    />
  );
};

// get current selected track
const mstp = state => {
  return {
    trackId: state.track.currentTrack
  };
};

export default connect(
  mstp,
  {}
)(SpotifyPlayer);
