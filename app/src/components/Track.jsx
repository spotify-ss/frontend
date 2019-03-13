import React from 'react';
import styled from 'styled-components';
import { ThumbsDown, ThumbsUp } from 'react-feather';

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

const ThumbsUpBtn = styled.button`
  color: ${props => props.active ? 'green' : 'black'}
`;

const ThumbsDownBtn = styled.button`
  color: ${props => props.active ? 'red' : 'black'}
`;

export default ({ track }) => {
  return (
    <TrackPreview>
      <h1>{track.track_name}</h1>
      <h2>{track.artist_name}</h2>
      <Buttons>
        <ThumbsDownBtn><ThumbsUp /></ThumbsDownBtn>
        <ThumbsUpBtn><ThumbsDown /></ThumbsUpBtn>
      </Buttons>
    </TrackPreview>
  );
};
