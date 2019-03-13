import React from 'react';
import styled from 'styled-components';
const imgWidth = 30;
const fontSize = 1;

const TrackPreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 5px 0;
  h1 {
    font-size: ${fontSize}em;
    text-align: left;
  }
  h2 {
    font-size: ${fontSize / 1.5}em;
    text-align: left;
  }
  div {
    width: 100%;
    margin: 0 0 10px;
    margin-left: 10px;
  }
  img {
    width: ${imgWidth}%;
    height: ${imgWidth}%;
  }
  audio {
    width: 100%;
  }
`;

export default ({ track }) => {
  return (
    <TrackPreview>
      <h1>{track.track_name}</h1>
      <h2>{track.artist_name}</h2>
    </TrackPreview>
  );
};
