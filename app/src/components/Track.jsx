import React from 'react';
import styled from 'styled-components';

const TrackPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 0;
  font-size: 2rem;
  width: 100%;
  border: 1px solid red;

  h2 {
    font-size: 1.5rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default ({ track }) => {
  return (
    <TrackPreview>
      <h1>{track.track_name}</h1>
      <h2>{track.artist_name}</h2>
      <Buttons>
        <button>similar</button>
        <button>thumbsUp</button>
        <button>thumbsDown</button>
      </Buttons>
    </TrackPreview>
  );
};
