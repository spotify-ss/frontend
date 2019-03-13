import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ThumbsDown, ThumbsUp } from 'react-feather';
import { upthumbTrack, downthumbTrack } from '../actions';

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

// Wrapper for track buttons
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

// Thumbs Up Button, if it has the active = 1, show green, otherwise black
const ThumbsUpBtn = styled.button`
  color: ${props => (props.active ? 'green' : 'black')};
`;
// Thumbs Up Button, if it has the active = 1, show red, otherwise black
const ThumbsDownBtn = styled.button`
  color: ${props => (props.active ? 'red' : 'black')};
`;

//   {
//     artist_name: 'Mendie MacNeish',
//     track_id: 'efa2912c-ad54-4483-bdae-5e3cbc5abebb',
//     track_name: 'Just Go with It',
//     acousticness: 'mmacneish0@biblegateway.com',
//     danceability: 'Male',
//     duration_ms: 374506,
//     energy: 0.46562,
//     instrumentalness: 1,
//     key: 1,
//     liveness: 1,
//     loudness: 1,
//     mode: 0,
//     speechiness: 0,
//     tempo: 295,
//     time_signature: 5,
//     popularity: 1,
//     image_url: 'http://dummyimage.com/151x146.png/ff4444/ffffff'
//   }

const Track = ({
  track,
  upthumbTrack,
  downthumbTrack,
  thumbedUp,
  thumbedDown
}) => {
  return (
    <TrackPreview>
      <h1>{track.track_name}</h1>
      <h2>{track.artist_name}</h2>
      <Buttons>
        <ThumbsUpBtn active={thumbedDown} onClick={downthumbTrack}>
          <ThumbsUp />
        </ThumbsUpBtn>
        <ThumbsDownBtn onClick={upthumbTrack} active={thumbedUp}>
          <ThumbsDown />
        </ThumbsDownBtn>
      </Buttons>
    </TrackPreview>
  );
};

// Map State to Props, find out if this track is upthumbed/downthumbed
// based on id and checking for id in those arrays
const mstp = (state, ownProps) => {
  // destructure track_id out of ownProps.track
  const {
    track: { track_id }
  } = ownProps;

  // destructure uppedIds and downedIds from state.thumbs (thumbReducer)
  const { uppedIds, downedIds } = state.thumbs;

  // if uppedIds includes this track, assume this track has been upthumbed
  const thumbedUp = uppedIds.indexOf(track_id) > -1 ? 1 : 0;

  // same for down
  const thumbedDown = !thumbedUp && downedIds.indexOf(track_id) > -1 ? 1 : 0;

  // return those as props
  return {
    thumbedUp,
    thumbedDown
  };
};

// Map dispatch to props, send the ids here from ownProps
const mdtp = (dispatch, ownProps) => {
  return {
    upthumbTrack: () => dispatch(upthumbTrack(ownProps.track.track_id)),
    downthumbTrack: () => dispatch(downthumbTrack(ownProps.track.track_id))
  };
};

export default connect(
  mstp,
  mdtp
)(Track);
